# **Bloco 19 -** Docker: Utilizando Containers

## DIA 3 - Orquestrando Containers com Docker Compose

&nbsp;

### **Exercício 1**

1. Crie um arquivo HTML chamado `missao_trybe.html` que tenha a seguinte estrutura:
  * `<title>` "Trybe"
  * `<h1>` "Missão da Trybe"
  * `<p>` "Gerar oportunidade para pessoas"
2. Crie um container para manter um servidor `httpd:2.4` **Apache** e vincule sua porta interna com a porta 4545 da sua máquina local.
  * `docker container run -d -p 4545:80 -v "<CAMINHO DO HTML CRIADO ANTES>:/usr/local/apache2/htdocs" httpd:2.4`
3. Após criar o container acesse a página HTML que está rodando no servidor em seu browser.
  * http://localhost:4545/missao_trybe.html
4. Acesse o arquivo missao_trybe.html e acrescente a tag `<p>` com o seginte texto: *"Nosso negócio é GENTE! #VQV"*.
5. Obtenha o id do container httpd:2.4.
6. Obtenha o `Mounts` através da propriedade `Source` que deve mostrar o volume desse container no *Docker Host*.
