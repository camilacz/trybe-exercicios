# **Bloco 20 -** Introdução à SQL

## DIA 3 - Filtrando dados de forma específica

&nbsp;

```sql
# BANCO DE DADOS PROS EXERCÍCIOS:

DROP SCHEMA IF EXISTS Scientists;
CREATE SCHEMA Scientists;
USE Scientists;

CREATE TABLE Scientists (
  SSN INT,
  Name CHAR(30) NOT NULL,
  PRIMARY KEY (SSN)
);

CREATE TABLE Projects (
  Code CHAR(4),
  Name CHAR(50) NOT NULL,
  Hours INT,
  PRIMARY KEY (Code)
);

CREATE TABLE AssignedTo (
  Scientist INT NOT NULL,
  Project CHAR(4) NOT NULL,
  PRIMARY KEY (Scientist, Project),
  FOREIGN KEY (Scientist) REFERENCES Scientists (SSN),
  FOREIGN KEY (Project) REFERENCES Projects (Code)
);

INSERT INTO Scientists(SSN, Name)
  VALUES(123234877, 'Michael Rogers'),
    (152934485, 'Anand Manikutty'),
    (222364883, 'Carol Smith'),
    (326587417, 'Joe Stevens'),
    (332154719, 'Mary-Anne Foster'),
    (332569843, 'George ODonnell'),
    (546523478, 'John Doe'),
    (631231482, 'David Smith'),
    (654873219, 'Zacary Efron'),
    (745685214, 'Eric Goldsmith'),
    (845657245, 'Elizabeth Doe'),
    (845657246, 'Kumar Swamy');

 INSERT INTO Projects (Code, Name, Hours)
  VALUES ('AeH1' ,'Winds: Studying Bernoullis Principle', 156),
    ('AeH2', 'Aerodynamics and Bridge Design', 189),
    ('AeH3', 'Aerodynamics and Gas Mileage', 256),
    ('AeH4', 'Aerodynamics and Ice Hockey', 789),
    ('AeH5', 'Aerodynamics of a Football', 98),
    ('AeH6', 'Aerodynamics of Air Hockey', 89),
    ('Ast1', 'A Matter of Time', 112),
    ('Ast2', 'A Puzzling Parallax', 299),
    ('Ast3', 'Build Your Own Telescope', 6546),
    ('Bte1', 'Juicy: Extracting Apple Juice with Pectinase', 321),
    ('Bte2', 'A Magnetic Primer Designer', 9684),
    ('Bte3', 'Bacterial Transformation Efficiency', 321),
    ('Che1', 'A Silver-Cleaning Battery', 545),
    ('Che2', 'A Soluble Separation Solution', 778);

 INSERT INTO AssignedTo (Scientist, Project)
  VALUES (123234877, 'AeH1'),
    (152934485, 'AeH3'),
    (222364883, 'Ast3'),
    (326587417, 'Ast3'),
    (332154719, 'Bte1'),
    (546523478, 'Che1'),
    (631231482, 'Ast3'),
    (654873219, 'Che1'),
    (745685214, 'AeH3'),
    (845657245, 'Ast1'),
    (845657246, 'Ast2'),
    (332569843, 'AeH4');
```
*Esse banco de dados é de uso livre, sendo licenciado de acordo com os termos [deste link](https://creativecommons.org/licenses/by-sa/3.0/).*

&nbsp;

### **Bônus -** escreva uma query para exibir...

1. Todas as informações de todos os cientistas que possuam a letra `e` em seu nome.
```sql
SELECT * FROM Scientists.Scientists
WHERE Name LIKE '%e%';
```

2. O nome de todos os projetos cujo código inicie com a letra `a`. Ordene os resultados em ordem alfabética.
```sql
SELECT * FROM Scientists.Projects
WHERE Name LIKE '%a%'
ORDER BY Name;
```

3. O código e nome de todos os projetos que possuam em seu código o número 3. Os resultados devem ser exibidos em ordem alfabética.
```sql
SELECT Code, Name FROM Scientists.Projects
WHERE Code LIKE '%3%'
ORDER BY Name;
```

4. Todos os cientistas (valores numéricos) cujos projetos sejam `AeH3`, `Ast3` ou `Che1`.
```sql
SELECT Scientist FROM Scientists.AssignedTo
WHERE Project IN ('AeH3', 'Ast3', 'Che1');
```

5. Todas as informações de todos os projetos com mais de 500 horas.
```sql
SELECT * FROM Scientists.Projects
WHERE Hours > 500;
```

6. Todas as informações de todos os projetos cujas horas sejam maiores que 250 e menores que 800.
```sql
SELECT * FROM Scientists.Projects
WHERE Hours > 250 AND Hours < 800;
```

7. O nome e o código de todos os projetos cujo nome **NÃO** inice com a letra `A`.
```sql
SELECT Name, Code FROM Scientists.Projects
WHERE Name NOT LIKE '%A%';
```

8. O nome de todos os projetos cujo código contenha a letra `H`.
```sql
SELECT Name FROM Scientists.Projects
WHERE Code LIKE '%H%';
```