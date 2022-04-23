const readline = require('readline-sync');

const weight = readline.questionFloat('Qual seu peso (kg)? ');
const height = readline.questionInt('Qual sua altura (cm)? ');

const checkImcCategory = (imc) => {
  if (imc < 18.5) {
    console.log('Abaixo do peso (magreza)');
  } else if (imc < 24.9) {
    console.log('Peso normal');
  } else if (imc < 29.9) {
    console.log('Acima do peso (sobrepeso)');
  } else if (imc < 34.9) {
    console.log('Obesidade grau I');
  } else if (imc < 39.9) {
    console.log('Obesidade grau II');
  } else {
    console.log('Obesidade graus III e IV');
  }
};

const calcImc = (weight, height) => {
  const heightInMeters = height / 100;
  const result = weight / (heightInMeters ** 2);
  console.log(`IMC: ${result.toFixed(2)}`);
  checkImcCategory(result);
};

calcImc(weight, height);