# **Bloco 21 -** Funções SQL, JOINs e Normalização

## DIA 1 - Funções mais usadas no SQL

&nbsp;

### **Exercícios:** escreva uma query que...

1. Exiba o maior salário da tabela.
    ```sql
    SELECT MAX(SALARY) AS `GREATEST SALARY` FROM hr.employees;
    ```

2. Exiba a diferença entre o maior e o menor salário.
    ```sql
    SELECT MAX(SALARY) - MIN(SALARY) FROM hr.employees;
    ```

3. Exiba a média salarial de cada `JOB_ID`, ordenando pela média salarial em ordem decrescente.

    ```sql
    SELECT JOB_ID, AVG(SALARY) AS `AVERAGE_SALARY`
    FROM hr.employees
    GROUP BY JOB_ID
    ORDER BY `AVERAGE_SALARY` DESC;
    ```

4. Exiba a quantidade de dinheiro necessária para realizar o pagamento de todas os funcionários.

    ```sql
    SELECT SUM(SALARY) AS `MONEY_NEEDED`
    FROM hr.employees;
    ```

5. Exiba quatro informações, sempre com duas casas decimais:
    * o maior salário
    * o menor salário
    * a soma de todos os salários
    * a média dos salários

    ```sql
    SELECT ROUND(MAX(SALARY), 2) AS GREATEST,
        ROUND(MIN(SALARY), 2) AS SMALLEST,
        ROUND(SUM(SALARY), 2) AS `SUM`,
        ROUND(AVG(SALARY), 2) AS AVERAGE
    FROM hr.employees;
    ```

6. Exiba a quantidade de pessoas que trabalham como programadoras (`IT_PROG`).

    ```sql
    SELECT COUNT(*) AS PROGRAMMERS FROM hr.employees
    GROUP BY JOB_ID
    HAVING JOB_ID = 'IT_PROG';
    ```

7. Exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão (`JOB_ID`).

    ```sql
    SELECT JOB_ID, SUM(SALARY) AS TOTAL_MONEY
    FROM hr.employees
    GROUP BY JOB_ID;
    ```

8. Exiba somente a quantidade de dinheiro necessária para cobrir a folha de pagamento dos programadores (`IT_PROG`).

    ```sql
    SELECT JOB_ID, SUM(SALARY) AS TOTAL_MONEY
    FROM hr.employees
    GROUP BY JOB_ID
    HAVING JOB_ID = 'IT_PROG';
    ```

9. Exiba em ordem decrescente a média salarial de todos os cargos, exceto dos programadores (`IT_PROG`).

    ```sql
    SELECT JOB_ID, AVG(SALARY) AS AVERAGE_SALARY
    FROM hr.employees
    GROUP BY JOB_ID
    HAVING JOB_ID <> 'IT_PROG';
    ```
