# **Bloco 24 -** Node.js: ORM e Autenticação

## DIA 1 - ORM, Interface da aplicação com o banco de dados

&nbsp;

**Exercício 1:** Crie uma **migration** pra montar uma tabela books com as seguintes colunas:
  * **id:** tipo `integer`, não nula, chave primária, auto incremento.
  * **title:** tipo `string`, não nulo.
  * **author:** tipo `string`, não nulo.
  * **pageQuantity:** tipo `integer`.
  * **createdAt:** tipo `date`, não nulo.
  * **updatedAt:** tipo `date`, não nulo.

> Lembre-se que o método `down` deve ser capaz de remover a tabela.

**Exercício 2:** Crie o **model** `Book` utilizando a API do Sequelize.

**Exercício 3:** Crie um **service** com o método `getAll` para retornar uma lista de livros por meio do model Book.

**Exercício 4:** Crie um **controller** com o método `getAll` sendo um middleware para retornar a lista de livros por meio do método de `BookService.getAll`.

**Exercício 5:** Vincule a rota `GET /books` para acessar seu controller.

**Exercício 6:** Em BookService, crie um método `getById` que recebe um `id` como parâmetro e use o model Book para buscar esse livro.

**Exercício 7:** No controller BookController, crie o método `getById` sendo um middleware que recebe `id` como parâmetro e busca o livro por meio do service. Se o livro não existir, a resposta deve ter o status `404` e o json `{ "message": "Book not found" }`.

**Exercício 8:** Vincule a rota GET /books/:id para acessar seu controller.

**Exercício 9:** No service BookService, crie um método `create` que recebe um objeto com os atributos `title, author, pageQuantity` e salve um novo livro usando o model Book.

**Exercício 10:** No controller BookController, crie o método `create` sendo um middleware que recebe os atributos `title, author, pageQuantity` do body da requisição e salve os dados por meio do service.

**Exercício 11:** Vincule a rota `POST /books` para acessar seu controller.

**Exercício 12:** No service BookService, crie um método `update` que recebe dois parâmetros: o id do livro a ser alterado e um objeto com os atributos `title, author, pageQuantity` e atualize o livro utilizando o model Book.

**Exercício 13:** No controller BookController, crie o método `update` sendo um middleware que recebe o id como parâmetro de rota e os atributos `title, author, pageQuantity` do body da requisição e salve os dados por meio do service. A requisição deve retornar o status 200 e a mensagem "Book updated!". Se o livro não for encontrado retornar a mensagem "Book not found!".

**Exercício 14:** Vincule a rota `PUT /books/:id` para acessar seu controller.

**Exercício 15:** No service BookService, crie um método `remove` que recebe o id do livro a ser removido e remova o mesmo usando o model Book.

**Exercício 16:** No controller BookController, crie o método `remove` sendo um middleware que recebe o id como parâmetro de rota e remova o livro por meio do service.

**Exercício 17:** Vincule a rota `DELETE /books/:id` para acessar seu controller.

## Questões Bônus

**Bônus 1:** Crie um `seeder` usando o `Sequelize-CLI`, populando a sua base com pelo menos um livro.

**Bônus 2:** Crie um método `getByAuthor` em BookService para buscar uma lista de livros por author.

**Bônus 3:** Refatore o método `getAll` de forma que se for enviado uma query string author ele seja capaz de pegar a lista usando o método `getByAuthor`.

**Bônus 4:** Refatore os métodos `getAll` e `getByAuthor` para que a lista de livros seja ordenada pelo título em ordem alfabética.

**Bônus 5:** Crie uma migration para adicionar a coluna `publisher` na tabela Books. Modifique as camadas de serviço para que esse campo seja utilizado no cadastro e na edição.
