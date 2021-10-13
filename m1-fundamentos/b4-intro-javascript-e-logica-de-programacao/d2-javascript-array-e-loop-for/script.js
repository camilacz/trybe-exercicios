let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercício 1 - imprima todos os valores da array
for (number of numbers) {
  console.log(number);
}

//Exercício 2 - some todos os valores da array
let soma = 0;

for (let i = 0; i < numbers.length; i += 1) {
  soma += numbers[i];
}

console.log(soma);

//Exercício 3 - calcule e imprima a média aritmética da array
let media = soma / numbers.length;

console.log(media);

//Exercício 4
if (media > 20) {
  console.log('Valor maior que 20');
} else {
  console.log('Valor menor ou igual a 20');
}

//Exercício 5 - com 'for' descubra maior valor e imprima-o
let maior = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > maior) {
    maior = numbers[index];
  }
}

console.log(maior);

//Exercício 6 - imprima quantos valores ímpares há
let impares = 0;
for (i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 != 0) {
    impares += 1;
  }
}
if (impares > 0) {
  console.log(impares + " números ímpares");
} else {
  console.log('Nenhum valor ímpar encontrado')
}

//Exercício 7 - imprima menor valor da array
let menor = numbers[0];

for (i = 1; i < numbers.length; i += 1) {
  if (numbers[i] < menor) {
    menor = numbers[i];
  }
}

console.log(menor);

//Exercício 8 - crie e imprima array de 1 até 25 usando 'for'
let numeros = [];

for (let n = 1; n <= 25; n += 1) {
  numeros.push(n);
}

console.log(numeros);

//Exercício 9 - imprima divisão de 'numeros' por 2
let divisão = [];

for (i = 0; i < numeros.length; i += 1) {
  divisão.push(numeros[i] / 2);
}

console.log(divisão);




//BÔNUS

//Exercício 1 - imprima array 'numbers' em ordem crescente
//Código do course:
for (let index = 1; index < numbers.length; index += 1) {
  for (let index2 = 0; index2 < index; index2 += 1) {
    if (numbers[index] < numbers[index2]) {
      let position = numbers[index];
      numbers[index] = numbers[index2];
      numbers[index2] = position;
    }
  }
}

console.log(numbers);

//Exercício 2 - imprima array 'numbers' em ordem decrescente
for (let index = 1; index < numbers.length; index++) {
  for (let index2 = 0; index2 < index; index2++) {
    if (numbers[index] > numbers[index2]) {
      let position = numbers[index];
      numbers[index] = numbers[index2];
      numbers[index2] = position;
    }
  }
}

console.log(numbers);


//Exercício 3 - imprima nova array com resultado multiplicação dos elementos da array 'numbers' em pares
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let times = [];

for (let i = 0; i < numbers.length; i++) {
  if (i + 1 !== numbers.length) {
    times.push(numbers[i] * numbers[i + 1]);
  } else {
    times.push(numbers[i] * 2);
  }
}

console.log(times);