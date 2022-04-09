# **Bloco 20 -** Introdução à SQL

## DIA 2 - Encontrando dados em um banco de dados

&nbsp;

### **Exercícios: faça os exercícios [deste link](https://www.w3schools.com/sql/exercise.asp?filename=exercise_where1)**

1. Select all records where the `City` column has the value "Berlin"
	```sql
	SELECT * FROM Customers
	  WHERE City = 'Berlin';
	```

2. Use the `NOT`keyword to select all records where `City` is NOT "Berlin"
	```sql
	SELECT * FROM Customers
	  WHERE NOT City = 'Berlin';
	```

3. Select all records where the `CustomerID` column has the value 32
	```sql
	SELECT * FROM Customers
	  WHERE CustomerID = 32;
	```

4. Select all records where the `City` column has the value "Berlin" *and* the `PostalCode` column has the value 12209
	```sql
	SELECT * FROM Customers
	  WHERE City = 'Berlin'
	  AND PostalCode = 12209;
	```

5. Select all records where the `City` column has the value "Berlin" or "London"
	```sql
	SELECT * FROM Customers
	  WHERE City = 'Berlin'
	  OR City = 'London';
	```

6. Select all records form the `Customers` table, sort the result alphabetically by the column `City`
	```sql
	SELECT * FROM Customers
	  ORDER BY City;
	```

7. Select all records from the `Customers` table, sort the result *reversed* alphabetically by the column `City`
	```sql
	SELECT * FROM Customers
	  ORDER BY City DESC;
	```

8. Select all records from the `Customers` table, sort the result alphabetically, first by the column `Country`, then, by the column `City`
	```sql
	SELECT * FROM Customers
	  ORDER BY Country, City;
	```