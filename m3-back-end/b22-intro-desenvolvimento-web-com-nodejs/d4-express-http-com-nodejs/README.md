# **Bloco 22 -** Introdução ao desenvolvimento Web com Node.js

## DIA 4 - Express: HTTP com Node.js

&nbsp;

### **Exercícios 1:** Crie uma rota `GET /ping`
  * Sua rota deve retornar o seguinte JSON: `{ message: 'pong' }`

### **Exercícios 2:** Crie uma rota `POST /hello`
  * Sua rota deve receber, no body da requisição, o seguinte JSON: `{ name: <nome do usuário> }`
  * Sua rota deve retornar o seguinte JSON: `{ message: 'Hello, <nome do usuário>!' }`

### **Exercícios 3:** Crie uma rota `POST /greetings`
  * Sua rota deve receber o seguinte JSON: `{ name: <nome do usuário>, age: <idade do usuário> }`
  * Caso a pessoa tenha idade superior a 17 anos, devolva o JSON `{ message: 'Hello, <nome do usuário>!' }` com o status code `200 - OK`
  * Caso o usuário tenha 17 anos ou menos, devolva o JSON: `{ message: 'Unauthorized' }` com o status code `401 - Unauthorized`

### **Exercícios 4:** Crie uma rota `PUT /users/:name/:age`
  * Sua rota deve retornar o seguinte JSON: `{ message: 'Seu nome é <name> e você tem <age> anos de idade' }`

### **Exercícios 5:** Crie uma API de dados dos personagens de Simpsons, utilizando o arquivo `simpsons.json`
*Os exercícios a seguir deverão ser feitos usando o arquivo `simpsons.json`. Caso dê tudo certo, a resposta deve voltar com status **200 OK**.*

> DICA: Utilize o módulo `fs` do Node para ler/escrever arquivos.

  * **A)** Crie um endpoint `GET /simpsons`
    * Retorne um array com todos os simpsons
  * **B)** Crie um endpoint `GET /simpsons/:id`
    * Retorneo personagem com o id informado na URL
    * Caso não encontre, retorne o JSON:
      ```json
      // STATUS: 404 - Not Found
      { "message": "simpson not found" }
      ```
  * **C)** Crie um endpoint `POST /simpsons`
    * Este endpoint deve cadastrar novos personagens
    * O corpo deve receber o JSON:
      ```json
      {
        "id": "<id-do-personagem>",
        "name": "<nome-do-personagem>"
      }
      ```
    * Caso já exista um personagem com o id informado, devolva o JSON:
      ```json
      // STATUS: 409 - Conflict
      { "message": "id already exists" }
      ```
    * Caso o personagem ainda não exista, adicione-o ao arquivo simpsons.json e devolva um body vazio com o status `204 - No Content`.
      > DICA: use `end()` ao final do retorno para encerrar a requisição sem enviar nenhum dado.

## **BÔNUS**

### **Exercícios 1:** Adicione autenticação a todos os endpoints.
  * O token deve ser enviado através do header `Authorization`
  * Ele deve ter exatamente 16 caracteres
  * Se for inválido ou inexistente, a resposta deve ser:
    ```json
    // STATUS 401 - Unauthorized

    { "message": "Token inválido!" }
    ```

### **Exercícios 2:** Crie uma rota ``POST /signup`
  * A rota deve receber, no body, os campos `email`, `password`, `firstName` e `phone`
  * Se um dos campos não for preenchido, retornar o JSON seguinte:
    ```json
    // STATUS 401 - Unauthorized

    { "message": "Missing fiels" }
    ```
  * Caso tudo esteja correto, a rota deve gerar um token aleatório válido, e retornar a seguinte resposta:
      ```json
      // STATUS 200 - OK

      { "token": "<token-aleatório>" }
      ```
  > DICA: Para gerar o token, utilize a função `randomBytes` do módulo `crypto` do Node, dessa forma:
  >
  > ```js
  > const crypto = require('crypto');
  >
  > function generateToken() {
  > return crypto.randomBytes(8).toString('hex');
  > }
  >
  > module.exports = generateToken;
  > ```
