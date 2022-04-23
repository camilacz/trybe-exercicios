const readline = require('readline-sync');

const weight = readline.questionFloat('Qual seu peso (kg)? ');
const height = readline.questionInt('Qual sua altura (cm)? ');

const imc = (weight, height) => {
  const heightInMeters = height / 100;
  const result = weight / (heightInMeters ** 2);
  return `IMC: ${result.toFixed(2)}`;
};

console.log(imc(weight, height));
