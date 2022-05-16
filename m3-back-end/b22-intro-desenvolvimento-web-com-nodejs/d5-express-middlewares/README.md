# **Bloco 22 -** Introdução ao desenvolvimento Web com Node.js

## DIA 5 - Middlewares

&nbsp;

### **Exercícios 1:** Crie uma rota `POST /sales` que receba um JSON no seguinte formato no body:
  ```json
  {
    "productName": "SmarTV",
    "infos": {
      "saleDate": "19/02/2022",
      "warrantyPeriod": 3
    }
  }
  ```

As seguintes validações  deverão ser realizadas:

  1. `productName` deve ser obrigatório e ter mais de 4 caracteres.
  2. Caso o campo productName não seja passado, deve ser retornado o seguinte:
      ```json
      // STATUS 400

      { "message": "O campo productName é obrigatório" }
      ```
  3. Caso o campo `productName`possua menos de 4 caracteres, deve ser retornado:
      ```json
      // STATUS 400

      { "message": "O campo productName deve ter pelo menos 4 caracteres" }
      ```
  4. `infos` deve ser um objeto obrigatório contendo duas chaves: `saleDate` e `warrantyPeriod`.
  5. Caso o campo `infos` não seja passado, o retorno deve ser o seguinte:
      ```json
      // STATUS 400

      { "message": "O campo infos é obrigatório" }
      ```
  6. `saleDate` deve conter uma data válida no padrão `dd/mm/aaaa`.
  7. Caso o campo `saleDate` não seja passado, o retorno deve ser este:
      ```json
      // STATUS 400

      { "message": "O campo saleDate é obrigatório" }
      ```
  8. Caso o campo `saleDate` não seja uma data válida, retorne:
      ```json
      // STATUS 400

      { "message": "O campo saleDate não é uma data válida" }
      ```
  9. `warrantyPeriod` deve ser um número inteiro entre 1 e 3.
  10. Se o campo `warrantyPeriod` não for passado, retorne:
      ```json
      // STATUS 400

      { "message": "O campo warrantyPeriod é obrigatório" }
      ```
  11. Caso o campo `warrantyPeriod` não seja um número entre 1 e 3, retorne:
      ```json
      // STATUS 400

      { "message": "O campo warrantyPeriod precisa estar entre 1 e 3" }
      ```
  12. Se todos os campos forem válidos, retorne a seguinte resposta:
      ```json
      // STATUS 201

      { "message": "Venda cadastrada com sucesso" }
      ```