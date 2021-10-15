// PARTE 1 - OBJETOS E FOR/IN

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};


//Exercício 1 - Imprima uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
let welcomeMessage = 'Bem-vinda, ' + info.personagem;
console.log(welcomeMessage);


//Exercício 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.
info['recorrente'] = 'Sim';
console.log(info);


//Exercício 3 - Faça um for/in que mostre todas as chaves do objeto.
for (let key in info) {
  console.log(key);
}


//Exercício 4 - Faça um for/in que mostre todos os valores das chaves do objeto.
for (let key in info) {
  console.log(info[key]);
}

//Exercício 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.
let hq = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
}

for (let key in info) {
  let sentence = info[key] + ' e ' + hq[key];
  if (key === 'recorrente') {
    console.log ('Ambos recorrentes');
  } else {
    console.log(sentence);
  }
}