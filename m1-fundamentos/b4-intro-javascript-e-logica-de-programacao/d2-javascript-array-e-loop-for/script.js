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
