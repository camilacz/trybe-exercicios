# **Bloco 20 -** Introdução à SQL

## DIA 2 - Encontrando dados em um banco de dados

&nbsp;

```
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

INSERT INTO Scientists(SSN,Name)
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

### **Exercícios:** escreva uma query para exibir...

1. A string "This is SQL Exercise, Practice and Solution"
	* `SELECT "This is SQL Exercise, Practice and Solution" AS potato;`

2. Três números em três colunas
	* `SELECT 1 AS number1, 2 AS number2, 3 AS number3;` 😉 criatividade

3. A soma dos números 10 a 15
	* `SELECT 10 + 15 AS soma;`

4. O resultado de uma expressão aritmética qualquer
	* `SELECT 87 + 6516 * 2682  AS pineapple;`

5. Todas as informações de todos os cientistas
	* `SELECT * FROM Scientists.Scientists;`

6. O nome como "Nome do Projeto" e as horas como "Tempo de Trabalho" de cada projeto
	* `SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Projects;`

7. O nome dos cientistas em ordem alfabética
	* `SELECT Name FROM Scientists ORDER BY Name;`

8. O nome dos Projetos em ordem alfabética descrescente
	* `SELECT Name FROM Projects ORDER BY Name DESC;`

9. A string "O projeto `Name` precisou de `Hours` horas para ser concluído." para cada projeto
	* `SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído.') AS Projetos FROM Projects;`

10. O nome e as horas dos três projetos com a maior quantidade de horas
	* `SELECT Name, Hours FROM Projects ORDER BY Hours DESC LIMIT 3;`

11. O código de todos os projetos da tabela `AssignedTo` sem que haja repetições
	* `SELECT DISTINCT Project FROM AssignedTo;`

12. O nome do projeto com maior quantidade de horas
	* `SELECT Name FROM Projects ORDER BY Hours DESC LIMIT 1;`

13. O nome do segundo projeto com menor quantidade de horas
	* `SELECT Name FROM Projects ORDER BY Hours LIMIT 1 OFFSET 1;`

14. Todas as informações dos cinco projetos com a menor quantidade de horas
	* `SELECT * FROM Projects ORDER BY Hours LIMIT 5;`

15. A string "Existem `Number` cientistas na tabela Scientists.", em que o `Number` se refira à quantidade de cientistas
	* `SELECT CONCAT('Existem ', COUNT(*), ' cientistas na tabela Scientists.') FROM Scientists;`