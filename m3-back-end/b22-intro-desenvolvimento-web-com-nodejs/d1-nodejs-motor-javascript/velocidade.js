const readline = require('readline-sync');

const getAverageSpeed = () => {
  const distance = readline.questionInt('Distância percorrida (em metros): ');
  const time = readline.questionInt('Tempo gasto (em segundos): ');

  const result = distance / time;

  console.log(`A velocidade média é de ${result.toFixed(2)} m/s`);
};

getAverageSpeed();
