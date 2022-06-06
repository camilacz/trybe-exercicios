# **Bloco 24 -** Node.js: ORM e Autenticação

## DIA 2 - ORM, Associations

&nbsp;

**Exercícios:** Crie uma API responsável pela gestão de um sistema de saúde. Nesse sistema terão pacientes, cada um com seu plano. Cada paciente pode ter realizado várias cirurgias, que por sua vez, devem ser listadas e categorizadas, de acordo com o seguinte diagrama:

![Diagrama](images/diagrama3.png)

Não se esqueça de configurar o arquivo `config/config.js` com os dados do seu servidor! Para configurar suas variáveis de ambiente, você pode usar um arquivo `.env`.

> Antes de começar os exercícios, rode os seguintes comandos:
>
>  ```
>  $ npx sequelize db:create
>  $ npx sequelize db:migrate
>  $ npx sequelize db:seed:all
> ```

Depois de usar os comandos acima, você já pode fazer os exercícios:

  1) Crie o model de `Plans`.
  2) Crie o model de `Patients`.
  3) Crie o model de `Surgeries`.
  4) Crie o model de `Patient_surgeries`.
  5) Crie um endpoint que liste todos os pacientes e seus respectivos planos.
  6) Crie um endpoint que liste todos os pacientes e suas respectivas cirurgias realizadas.
  7) Crie um endpoint que, de acordo com o id de um plano recebido via requisição, liste os pacientes que o possuem.

Mais alguns exercícios bônus:

  1) Crie um endpoint capaz de adicionar um novo paciente.
  2) Crie um endpoint que liste todos os pacientes e suas cirurgias realizadas, mas oculte o nome do médico responsável.
  3) Crie um endpoint que, de acordo com o nome do médico recebido via requisição (`/surgeries/Rey%20Dos%20Santos`, por exemplo), liste todas as cirurgias realizadas pelo mesmo.

*Disclaimer: Os exercícios bônus não foram feitos e, visto que o objetivo dessas tarefas era treinar as associations com sequelize, eu também não me preocupei em tratar os erros*