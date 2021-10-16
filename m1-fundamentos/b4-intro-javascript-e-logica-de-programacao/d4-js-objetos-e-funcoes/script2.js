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
