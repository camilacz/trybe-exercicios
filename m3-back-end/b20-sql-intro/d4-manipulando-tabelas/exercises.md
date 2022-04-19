# **Bloco 20 -** Introdução à SQL

## DIA 4 - Manipulando Tabelas

&nbsp;

```sql
DROP SCHEMA IF EXISTS Pixar;
CREATE SCHEMA Pixar;
USE Pixar;

CREATE TABLE Movies (
  id INTEGER auto_increment PRIMARY KEY NOT NULL,
  title VARCHAR(30) NOT NULL,
  director VARCHAR(30) NULL,
  year INT NOT NULL,
  length_minutes INT NOT NULL
);

CREATE TABLE BoxOffice (
  movie_id INTEGER,
  FOREIGN KEY (movie_id) REFERENCES Movies (id),
  rating DECIMAL(2,1) NOT NULL,
  domestic_sales INT NOT NULL,
  international_sales INT NOT NULL
);

INSERT INTO Movies(title, director, year, length_minutes)
  VALUES ('Toy Story', 'John Lasseter', 1995, 81),
         ('Vida de inseto', 'Andrew Staton', 1998, 95),
         ('ratatui', 'Brad Bird', 2010, 115),
         ('UP', 'Pete Docter', 2009, 101),
         ('Carros', 'John Lasseter', 2006, 117),
         ('Toy Story 2', 'John Lasseter', 1999, 93),
         ('Valente', 'Brenda Chapman', 2012, 98);


INSERT INTO BoxOffice(movie_id, rating, domestic_sales, international_sales)
  VALUES (1, 8.3, 190000000, 170000000),
         (2, 7.2, 160000000, 200600000),
         (3, 7.9, 245000000, 239000000),
         (4, 6.1, 330000000, 540000000),
         (5, 7.8, 140000000, 310000000),
         (6, 5.8, 540000000, 600000000),
         (7, 7.5, 250000000, 190000000);
```

&nbsp;

### **Exercícios:**

1. Insira as seguintes produções Pixar na tabela `Movies`:
    * Monstros SA, de Pete Docter, lançado em 2001, com 92 minutos de duração.
    * Procurando Nemo, de John Lasseter, lançado em 2003, com 107 minutos de duração.
    * Os Incríveis, de Brad Bird, lançado em 2004, com 116 minutos de duração.
    * WALL-E, de Pete Docter, lançado em 2008, com 104 minutos de duração.

    ```sql
    INSERT INTO Pixar.Movies (title, director, year, length_minutes)
    VALUE ('Monstros SA', 'Pete Docter', 2001, 92),
          ('Procurando Nemo', 'John Lasseter', 2003, 107),
          ('Os Incríveis', 'Brad Bird', 2004, 116),
          ('WALL-E', 'Pete Docter', 2008, 104);
    ```

2. Adicione estas informações à tabela `BoxOffice`:
    * Procurando Nemo foi aclamado pela crítica! Foi classificado em 6.8, fez 450 milhões no mercado interno e 370 milhões no mercado internacional.

    ```sql
    INSERT INTO Pixar.BoxOffice (movie_id, rating, domestic_sales, international_sales)
    VALUES (9, 6.8, 450000000, 370000000);
    ```

3. O diretor do filme "Procurando Nemo" está incorreto. Na verdade, ele foi dirigido por Andrew Staton. Corrija esse dade usando o `UPDATE`.

    ```sql
    UPDATE Pixar.Movies
    SET director = 'Andrew Staton'
    WHERE id = 9;
    ```

4. O título do filme "Ratatouille" está escrito errado na tabela `Movies`. Além disso, o filme foi lançado em 2007, não 2010. Corrija esses dados.

    ```sql
    UPDATE Pixar.Movies
    SET title = 'Ratatouille', year = 2007
    WHERE id = 3;
    ```

5. Insira as novas classificações abaixo na tabela `BoxOffice`:
    * Monsters SA, classificado em 8.5, lucrou 300 milhões no mercado interno e 250 milhões no mercado internacional.
    * Os Incríveis, classificado 7.4, lucrou 460 milhões no mercado interno e 510 milhõess no mercado internacional.
    * WALL-E, classificado em 9.9, lucrou 290 milhões no mercado internoo e 280 milhões no mercado internacional.

    ```sql
    INSERT INTO Pixar.BoxOffice (movie_id, rating, domestic_sales, international_sales)
    VALUES (8, 8.5, 300000000, 250000000),
           (10, 7.4, 460000000, 510000000),
           (11, 9.9, 290000000, 280000000);
    ```

6. Exclua o filme "WALL-E" da tabela `Movies`.

    ```sql
    -- 1. Deleta dado que faz referência (foreign key)
    DELETE FROM Pixar.BoxOffice
    WHERE movie_id = 11;

    -- 2. Deleta filme
    DELETE FROM Pixar.Movies
    WHERE title = 'WALL-E' AND id = 11;
    ```

7. Exclua todos os filmes dirigidos por "Andrew Staton" da tabela `Movies`.

    ```sql
    SET sql_safe_updates = 0;

    SELECT id FROM Pixar.Movies
    WHERE director = 'Andrew Staton';
    -- SAÍDA: 2, 9

    DELETE FROM Pixar.BoxOffice
    WHERE movie_id IN (2, 9);

    DELETE FROM Pixar.Movies
    WHERE director = 'Andrew Staton';
    ```

&nbsp;

### **Bônus:**

8. Altere a classificação da tabela `BoxOffice` para 9.0 de todos os filmes que lucraram mais de 400 milhões no mercado interno.

    ```sql
    -- 1. Consegue ids dos dados
    SELECT movie_id FROM Pixar.BoxOffice
    WHERE domestic_sales > 400000000;

    -- 2. Atualiza dados
    UPDATE Pixar.BoxOffice
    SET rating = 9.0
    WHERE movie_id IN (6, 10);
    ```

9. Altere a classificação da tabela `BoxOffice` para 6.0 de todos os filmes que lucraram menos de 300 milhões no mercado internacional e mais de 200 milhões no mercado interno.

    ```sql
    -- breaking rules 😎
    SET sql_safe_updates = 0;

    UPDATE Pixar.BoxOffice
    SET rating = 6.0
    WHERE domestic_sales > 200000000 AND international_sales < 300000000;
    ```

10. Exclua todos os filmes com menos de 100 minutos de duração da tabela `Movies`.

    ```sql
    SELECT id FROM Pixar.Movies
    WHERE length_minutes < 100;
    -- SAÍDA: 1, 6, 7, 8

    DELETE FROM Pixar.BoxOffice
    WHERE movie_id IN (1, 6, 7, 8);

    DELETE FROM Pixar.Movies
    WHERE id IN (1, 6, 7, 8);
    ```