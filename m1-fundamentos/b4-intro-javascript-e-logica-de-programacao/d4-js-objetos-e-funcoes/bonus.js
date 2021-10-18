// BÔNUS

//Exercício 2 - Crie uma função arrayOfNumbers com parâmetro vector. Usando o for, a função deverá retornar uma array com todos os números pares.
function arrayOfNumbers(vector) {
  let evenNumbers = [];

  for (let n = 0; n < vector.length; n++) {
    let numbers = vector[n];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
      }
    }
  }
  
  return evenNumbers;
}

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
console.log(arrayOfNumbers(vector));


//Só consegui fazer o 2, por enquanto T-T