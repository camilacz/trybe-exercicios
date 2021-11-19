// EXERCÍCIO 1

const employeeInfo = (fullName) => {
  const email = `${fullName.replace(' ', '_').toLowerCase()}@trybe.com`;
  return { fullName, email };
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(employeeInfo));

// EXERCÍCIO 2

const checkNumbers = (number, random) => number === random;

const randomNumber = (number, callback) => {
  const random = Math.floor((Math.random() * 5) + 1);
  return callback(number, random) ? 'Parabéns você ganhou!' : 'Tente novamente';
}

console.log(randomNumber(3, checkNumbers));