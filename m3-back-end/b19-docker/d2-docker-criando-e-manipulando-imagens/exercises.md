# **Bloco 19 -** Docker: Utilizando Containers

## DIA 2 - Manipulação e criação de imagens no Docker

&nbsp;

### **Exercício:** Usar imagem "cowsay" disponível no DockerHub e deixar sua mensagem 'parametrizável', como no exemplo a seguir:
```
$ docker container run cowsay Hello

\\ SAÍDA ESPERADA:
____________
< Hello >
------------
         \   ^__^
         \  (oo)\_______
            (__)\       )\/\
               ||----w |
               ||     ||
```

&nbsp;

1. Crie um Dockerfile utilizando a imagem `chuanwen/cowsay`
2. Agora defina um `ENTRYPOINT` para a execução do comando.
   * *Lembre-se que com ele, diferente do `CMD`, o comando não poderá ser sobrescrito com o `docker run`, porém, conseguiremos passar parâmetros ao binário.*
3. Utilize o `CMD` para definir uma mensagem padrão.
4. Gere uma build e execute um container baseado em sua imagem sem passar nenhum comando.
   * `docker image build -t cowsay ./`
5. Agora execute um novo container passando sua mensagem para testar, além da mensagem você pode utilizar a opção `-l` para listar outros personagens disponíveis e então executar algo como `docker container run cowsay -f dragon-and-cow "EHH MACARENA"` , para exibir um dragão junto com a vaquinha.
   * `docker run cowsay` ou `docker run cowsay <ALGUMA FRASE>`

---