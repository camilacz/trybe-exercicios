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
    * `docker ps` || `docker container ls`
6. Obtenha o `Mounts` através da propriedade `Source` que deve mostrar o volume desse container no *Docker Host*.
    * `docker inspect <ID DO CONTAINER>`
    * Mounts (parte da saída):
    ```
    "Mounts": [
                {
                  "Type": "bind",
                  "Source": "<LOCAL PATH>",
                  "Destination": "/usr/local/apache2/htdocs",
                  "Mode": "",
                  "RW": true,
                  "Propagation": "rprivate"
                }
              ],
    ```
7. Agora pare o seu container.
    * `docker stop <ID DO CONTAINER>`
8. Exclua o seu container.
    * `docker rm <ID DO CONTAINER>`
9. Verifique se a pasta onde você salvou o arquivo html permanece no mesmo lugar (*kinda dumb but who am i to judge...*).
	* `cd <PATH TO HTML>`
	* `ls -la`
10. Obtenha o **IMAGE ID** do servidor.
	* `docker images`
11. Exclua tal imagem.
	* `docker rmi <ID DA IMAGEM>`

&nbsp;

### **Exercício 2**

Crie o arquivo Compose para subir um *ghost blog*, essa plataforma é similar com o *Wordpress* e é utilizada para criar sites de conteúdo. Você pode ler no site oficial, criar conteúdos e utilizá-lo. Para esse exercício, utilizaremos apenas sua página de exemplo:

1. Utilize a versão "3" no arquivo.
2. Crie um `service` para subir a plataforma. Utilize a imagem `ghost:1-alpine`.
3. Publique a porta `2368`, fazendo bind também para a `2368`.
4. Suba a aplicação usando o `docker-compose` e então acesse a porta publicada para validar se deu tudo certo.
	* `docker-compose up -d`
	* http://localhost:2368