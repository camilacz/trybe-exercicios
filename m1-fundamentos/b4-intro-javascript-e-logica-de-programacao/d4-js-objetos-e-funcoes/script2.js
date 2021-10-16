// PARTE II - FUNÇÕES

//Exercício 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
function palindrome(word) {
  let length = word.length - 1;
  let reverse = '';

  for (let i = length; i >= 0; i--) {
    reverse += word[i];
  }
  if (word === reverse) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome('arara'));
console.log(palindrome('desenvolvimento'));


//Exercício 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
function greatest(numbers) {
  let greatestN = numbers[0];
  let greatestI = 0;
  
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > greatestN) {
      greatestN = numbers[i];
      greatestI = i;
    }
  }
  
  return greatestI;
}

let array = [2, 3, 6, 7, 10, 1];
console.log(greatest(array));


//Exercício 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
function smallest(numbers) {
  let smallestIndex = 0;

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[smallestIndex] > numbers[i]) {
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

let test = [2, 4, 6, 7, 10, 0, -3];
console.log(smallest(test));