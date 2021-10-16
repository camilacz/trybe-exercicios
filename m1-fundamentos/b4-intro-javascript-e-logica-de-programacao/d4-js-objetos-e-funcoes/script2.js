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


//Exercício 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
function longestName(names) {
  let longest = names[0];

  for (let i in names) {
    if (names[i].length > longest.length) {
      longest = names[i];
    }
  }
  return longest;
}

let arrTest = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(longestName(arrTest));


//Exercício 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
function repetition(numbers) {

}


//Exercício 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
function sumAll(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumAll(5));


//Exercício 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
function sameEnding(word, ending) {
  let reverseWord = word.split('').reverse().join('');
  let reverseEnding = ending.split('').reverse().join('');
  let endSame = true;

  for (let i = 0; i < ending.length; i++) {
    if (reverseWord[i] !== reverseEnding[i]) {
      endSame = false;
      break;
    }
  }

  return endSame;
}

console.log(sameEnding('trybe', 'be'));
console.log(sameEnding('joaofernando', 'fernan'));