# **Bloco 22 -** Introdução ao desenvolvimento Web com Node.js

## DIA 1 - Node.js, um motor JavaScript

&nbsp;

### **Exercícios 1:** Crie um script para calcular o Índice de Massa Corporal (IMC) de uma pessoa.

  * A fórmula é `peso / altura ^ 2` (peso sendo em quilos e altura em metros).
  * Comece criando um novo pacote node com `npm init`.
  * Use valores fixos para o peso e altura por enquanto.
  * Armazene o script no arquivo `imc.js`.

### **Exercícios 2:** Faça o script ser executado através do comando `npm run imc`.

  * O novo script criado deve conter o comando que chama o `node` para executar o arquivo `imc.js`.

### **Exercícios 3:** Torne seu script  mais interativo por adicionar input de quem o usa.

  * Você pode utilizar o pacote `readline-sync`.
  * Substitua os valores fixos de `peso` e `altura` por dados informados pela pessoa ao responder as perguntas "Qual seu peso?" e "Qual sua altura?" no terminal.

### **Exercícios 4:** Agora, além de imprimir o IMC na tela, imprima também em qual categoria da tabela abaixo aquele IMC se enquandra.

  ```
  | IMC                                       | Situação                  |
  | ----------------------------------------- | ------------------------- |
  | Abaixo de 18,5                            | Abaixo do peso (magreza)  |
  | Entre 18,5 e 24,9                         | Peso normal               |
  | Entre 25,0 e 29,9                         | Acima do peso (sobrepeso) |
  | Entre 30,0 e 34,9                         | Obesidade grau I          |
  | Entre 35,0 e 39,9                         | Obesidade grau II         |
  | 40,0 e acima                              | Obesidade graus III e IV  |
  ```

### **Exercícios 5:** Crie um novo script para calcular a velocidade média de um carro numa corrida.

  * A fórmula é `distância / tempo`, onde a distância é medida em metros e o tempo em segundos; sempre números inteiros.
  * Armazene o script no arquivo `velocidade.js`.
  * Permita que o scrit seja executado através do comando `npm run velocidade`.
  * Use o `readline-sync` para solicitar dados à pessoa.

### **Exercícios 6:** Crie um "jogo de adivinhação" em que a pessoa ganha se acertar qual foi o número aleatório gerado.

  * O script deve ser executado através do comando `npm run sorteio`.
  * Armazene o script em `sorteio.js`.
  * O número gerado deve ser um interio entre 0 e 10.
  * Em caso de acerto, exiba "Parabéns, número correto!".
  * Em caso de erro, exiba "Opa, não foi dessa vez. O número era [número gerado]".
  * Ao final, pergunte se a pessoa deseja jogar novamente e volte ao começo do script se sim.

### **Exercícios 7:** Crie um arquivo `index.js` que pergunta qual script deve ser executado.

  * O arquivo deve ser acionado através do comando `npm start`.
  * O script deve exibir uma lista numerada dos scripts disponíveis.
  * Ao digitar o número de um script e pressionar *enter*, o script escolhido deve ser executado.
  * Você pode usar o `require` para executar o script em questão.
