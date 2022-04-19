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
    HAVING JOB_ID <> 'IT_PROG'
    ORDER BY AVERAGE_SALARY DESC;
    ```

10. Exiba a média salarial e o número de funcionários de todos os cargos, exceto de programadores (`IT_PROG`).

    ```sql
    SELECT DEPARTMENT_ID,
        AVG(SALARY) AS AVERAGE_SALARY,
        COUNT(*) AS NUMBER_OF_EMPLOYEES
    FROM hr.employees
    GROUP BY DEPARTMENT_ID
    HAVING NUMBER_OF_EMPLOYEES > 10;
    ```

11. Atualize a coluna `PHONE_NUMBER`, de modo que todos os telefones iniciados por `515` agora inciem com `777`.

    ```sql
    SET sql_safe_updates = 0;

    UPDATE hr.employees
    SET PHONE_NUMBER = REPLACE(PHONE_NUMBER, '515', '777')
    WHERE PHONE_NUMBER LIKE '515%';
    ```

12. Exiba apenas as informações dos funcionários cujo primerio nome tenha oito ou mais caracteres.

    ```sql
    SELECT * FROM hr.employees
    WHERE CHAR_LENGTH(FIRST_NAME) >= 8;

    -- LENGTH também funciona
    ```

13. Exiba as seguintes informações de cada funcionário:
    * id
    * primeiro nome
    * ano no qual foi contratado

    ```sql
    SELECT EMPLOYEE_ID,
           FIRST_NAME,
           YEAR(HIRE_DATE) AS HIRE_YEAR
    FROM hr.employees;
    ```

14. Exiba as seguintes informações de cada funcionário:
    * id
    * primeiro nome
    * dia do mês que foi contratado

    ```sql
    SELECT EMPLOYEE_ID,
      FIRST_NAME,
        DAY(HIRE_DATE) AS HIRE_DAY
    FROM hr.employees;
    ```

15. Exiba as seguintes informações sobre cada funcionário:
    * id
    * primeiro nome
    * mês de contratação

    ```sql
    SELECT EMPLOYEE_ID,
      FIRST_NAME,
        MONTH(HIRE_DATE) AS HIRE_MONTH
    FROM hr.employees;
    ```

16. Exiba os nomes dos funcionários em letra maiúscula.

    ```sql
    SELECT UCASE(CONCAT(FIRST_NAME, ' ', LAST_NAME)) AS EMPLOYEE_NAME
    FROM hr.employees;
    ```

17. Exiba o sobrenome e a data de contratação de todos os funcionários contratados em julho de 1987.

    ```sql
    SELECT LAST_NAME,
        HIRE_DATE
    FROM hr.employees
    WHERE HIRE_DATE LIKE '1987-07-%';
    ```

18. Exiba as seguintes informações de cada funcionário:
    * nome
    * sobrenome
    * tempo que trabalha na empresa (em dias)

    ```sql
    SELECT FIRST_NAME,
        LAST_NAME,
            DATEDIFF(CURRENT_DATE(), HIRE_DATE) AS DAYS_WORKING
    FROM hr.employees;
    ```
