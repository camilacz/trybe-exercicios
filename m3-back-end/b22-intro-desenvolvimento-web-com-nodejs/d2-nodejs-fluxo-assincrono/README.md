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

### **Exercício 4:** Utilizando [este arquivo](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/nodejs/async-flow/simpsons-94f8eb570f2ea830462ee2375ded177b.json), realize os requisitos abaixo.
  * Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato `id - Nome`, como no exemplo a seguir:
    ```js
    '1 - Homer Simpson'
    ```
  * Crie uma função que receba o `id` de um personagem e retorne uma `Promise`que é resolvida com os dados do personagem de `id` correspondente. Caso não haja nenhum, rejeite a Promise com o motivo "id não encontrado".
  * Crie uma função que altere o arquivo `simpsons.json`removendo os personagens com `id` 10 e 6.
  * Crie uma função que leia o arquivo simpsons.json e crie um novo chamado `simpsonFamily.json`, contendo os personagens de `id` 1 a 4.
  * Crie uma função que adicione ao arquivo `simpsonFamily.json` o personagem `Nelson Muntz` ({ id: 8 }).
  * Crie uma função que substitua o personagem `Nelson Muntz` pela personagem `Maggie Simpson` ({ id: 15 }) no arquivo `simpsonFamily.json`.

### **Exercício 5:** Crie uma função que lê e escreve vários ao mesmo tempo.
  * Utilize o `Promise.all` para manipular vários arquivos ao mesmo tempo.
  * Faça uma função que crie um arquivo para string da `array`, com nome `file<index + 1>.txt`.
  ```js
  const array = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

  // EXEMPLO:
  // (string: 'Finalmente')
  // (nome do arquivo: file1.txt)
  // (conteúdo: Finalmente)
  ```
  * Programe sua função para que ela faça a leitura de todos os arquivos no item anterior, armazene essa informação e escreva num arquivo chamado `fileAll.txt`.
  ```js
  // O arquivo fileAll.txt deve conter o seguinte conteúdo:
  
  'Finalmente estou usando Promise.all !!!'
  ```
