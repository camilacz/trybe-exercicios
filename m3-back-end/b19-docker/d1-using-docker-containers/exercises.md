# **Bloco 19 -** Docker: Utilizando Containers

&nbsp;
### **Atividade 1:** No Docker Hub, busque pela imagem da Distribuição Linux Debian
* Acesse o [Docker Hub](https://hub.docker.com/search?q=&type=image)
* Busque por "debian"

&nbsp;

---
### **Atividade 2:** Acesse a imagem oficial e verifique se existe algum comando para baixar a imagem localmente sem criar um container
* Comando `docker pull debian`

&nbsp;

---
### **Atividade 3:** Baixe a imagem usando a tag `stable-slim`, que é uma versão reduzida da distribuição
* Adiciona `:stable-slim` ao comando encontrado previamente
* **Outra opção:**  Busque o comando específico na aba "Tags"

&nbsp;

---
### **Atividade 4:** Depois de baixar a imagem, crie e execute um container no modo interativo utilizando essa imagem como referência
* No terminal: `docker container run -it debian:stable-slim`

&nbsp;

---
### **Atividade 5:** Rode o comando `cat /etc/*-release`, que retorna os dados da distribuição Debian do container
* Output:
```
PRETTY_NAME="Debian GNU/Linux 11 (bullseye)"
NAME="Debian GNU/Linux"
VERSION_ID="11"
VERSION="11 (bullseye)"
VERSION_CODENAME=bullseye
ID=debian
HOME_URL="https://www.debian.org/"
SUPPORT_URL="https://www.debian.org/support"
BUG_REPORT_URL="https://bugs.debian.org/"
```

&nbsp;

---
### **Atividade 6:** Encerre o terminal (do container)
* `exit` no terminal do container

&nbsp;

---
### **Atividade 7:** Verifique, na lista de container, qual o container referente ao exercício anterior
* `docker container ls -a` (-a de "all", inclusive inativos)

&nbsp;

---
### **Atividade 8:** Inicie o mesmo container novamente, sem criar outro
* `docker container restart <ID || NOME DO CONTAINER>`
* `docker container ls -a` pra verificar se o container está mesmo ativo

&nbsp;

---
### **Atividade 9:** Retome o mesmo container criado anteriormente (agora reativado)
* `docker container attach <ID || NOME DO CONTAINER>`

&nbsp;

---

### **Atividade 10:** Rode o comando `cat /etc/debian_version` para ver a versão atual do sistema do container
* Output: `11.2`

&nbsp;

---
### **Atividade 11:** Encerre o terminal (do container)
* `exit`

&nbsp;

---
### **Atividade 12:** Remova somente o container criado nesse exercício
* `docker container rm <ID || NOME>`

&nbsp;

---

## **BÔNUS**

&nbsp;

### **Atividade 13:** Crie e rode de modo interativo em modo 'Cleanup', a imagem `andrius/ascii-patrol`
* `docker container run -it --rm andrius/ascii-patrol`
* *Explicação: o parâmetro --rm garante que o container será removido após sua execução*
* `docker container ls -a` pra verificar se o container foi removido mesmo

&nbsp;

---
