const weight = 70; // peso em quilos
const height = 180; // altura em centímetros

const imc = (weight, height) => {
  const heightInMeters = height / 100;
  const result = weight / (heightInMeters ** 2);
  return `IMC: ${result.toFixed(2)}`;
};

console.log(imc(weight, height));
