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

// EXERCÍCIO 3

const checkAnswer = (rightAnswer, givenAnswer) => {
  if (givenAnswer === rightAnswer) {
    return 1;
  } else if (givenAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
};

const hof = (answerKey, toVerify, callbackChecker) => {
  let total = 0;

  for (let i = 0; i < answerKey.length; i += 1) {
    const result = callbackChecker(answerKey[i], toVerify[i]);
    total += result;
  }
  return `Resultado final: ${total}`;
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(hof(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswer));
