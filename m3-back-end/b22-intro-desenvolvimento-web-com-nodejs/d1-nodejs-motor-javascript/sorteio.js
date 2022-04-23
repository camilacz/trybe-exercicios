const readline = require('readline-sync');

const runGame = () => {
  const randomNumber = Math.round(Math.random() * 10);
  const answer = readline.questionInt(
    'Digite um número de 0 a 10 para saber se é esse o número que estou pensando: '
  );

  if (randomNumber === answer) {
    console.log('Parabéns, número correto!');
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${randomNumber}.`);
  }

  const playAgain = readline.question('Jogar novamente? (s/n) ');

  if (playAgain !== 's') return console.log('OK, até a próxima!');

  runGame();
};

runGame();
