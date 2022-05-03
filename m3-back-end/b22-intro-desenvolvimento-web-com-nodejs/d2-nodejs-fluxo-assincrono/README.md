# **Bloco 22 -** Introdução ao desenvolvimento Web com Node.js

## DIA 2 - Fluxo Assíncrono

&nbsp;

### **Exercícios 1:** Crie uma função que receba três parâmetros e retorna uma `Promise`.
  * Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo `"Informe apenas números"`.
  * Caso todos os parâmetros sejam númericos, some os dois primeiros e multiplique o resultado pelo terceiro (`(a + b) * c`).
  * Caso o resultado seja menor que 50, rejeite a Promise com o motivo `"Valor muito baixo"`.
  * Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

### **Exercícios 2:** Escreva um código para consumir a função construída no exercício anterior.
  * Gere um número aleatório de 1 a 100 para cada parÂmetro que a função recebe. Utilize o seguinte trecho de código:
    ```js
    Math.floor(Math.random() * 100 + 1)
    ```

### **Exercícios 3:** Reescreva o código do exercício anterior para que ultilize `aync/await`.