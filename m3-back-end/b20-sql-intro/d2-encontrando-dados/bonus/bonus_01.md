# **Bloco 20 -** Introdução à SQL

## DIA 2 - Encontrando dados em um banco de dados

&nbsp;

```sql
# BANCO DE DADOS PROS EXERCÍCIOS:


DROP SCHEMA IF EXISTS PiecesProviders;
CREATE SCHEMA PiecesProviders;
USE PiecesProviders;

CREATE TABLE Pieces (
  Code INTEGER PRIMARY KEY NOT NULL,
  Name TEXT NOT NULL
);

CREATE TABLE Providers (
  Code VARCHAR(40) PRIMARY KEY NOT NULL,
  Name TEXT NOT NULL
);

CREATE TABLE Provides (
  Piece INTEGER,
  FOREIGN KEY (Piece) REFERENCES Pieces (Code),
  Provider VARCHAR(40),
  FOREIGN KEY (Provider) REFERENCES Providers (Code),
  Price INTEGER NOT NULL,
  PRIMARY KEY (Piece , Provider)
);

INSERT INTO Providers(Code, Name)
  VALUES ('HAL', 'Clarke Enterprises'),
    ('RBT', 'Susan Calvin Corp.'),
    ('TNBC', 'Skellington Supplies');

INSERT INTO Pieces(Code, Name)
  VALUES (1, 'Sprocket'),
    (2, 'Screw'),
    (3, 'Nut'),
    (4, 'Bolt');

INSERT INTO Provides(Piece, Provider, Price)
  VALUES (1, 'HAL', 10),
    (1, 'RBT', 15),
    (2, 'HAL', 20),
    (2, 'RBT', 25),
    (2, 'TNBC', 14),
    (3, 'RBT', 50),
    (3, 'TNBC', 45),
    (4, 'HAL', 5),
    (4, 'RBT', 7);
```
*Esse banco de dados é de uso livre, sendo licenciado de acordo com os termos [deste link](https://creativecommons.org/licenses/by-sa/3.0/).*

&nbsp;

### **Exercícios -** escreva uma query para exibir...

1. A peça e o preço de tudo que é provido pela empresa RBT
	```sql
	SELECT Piece, Price FROM Provides WHERE Provider = 'RBT';
	```

2. Todas as informações das cinco peças com os maiores preços
	```sql
	SELECT * FROM PiecesProviders.Provides ORDER BY Price DESC LIMIT 5;
	```

3. O nome das empresas e preço das peças com os quatro maiores preços, começando a lista a partir do 3º item
	```sql
	SELECT Provider, Price FROM Provides ORDER BY Price DESC LIMIT 4 OFFSET 2;
	```

4. Todas as informações das peças providas pela empresa HAL, ordenando o resultado pelos preços das peças de forma decrescente
	```sql
	SELECT * FROM Provides WHERE Provider = 'HAL' ORDER BY Price DESC;
	```

5. Por quantas empresas a peça 1 é provida
	```sql
	SELECT COUNT(*) FROM Provides WHERE Piece = 1;
	```