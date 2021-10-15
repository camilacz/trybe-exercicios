//Exercício 1 - faça um programa que imprima um quadrado de asteriscos, com tamanho definido por 'n'
const n = 5;
let line = '';

for (let i = 0; i < n; i++) {
  line += '*';
};

for (let i = 0; i < n; i++) {
  console.log(line);
};


//Exercício 2 - como antes, imprima triângulo retângulo de base 'n'
line = '';

for (let i = 0; i < n; i++) {
  console.log(line += '*');
};


//Exercício 3 - agora inverta o lado do triângulo
line = '';
let linesMissing = n;

for (let linesNumber = 0; linesNumber < n; linesNumber++) {
  for (let linePosition = 1; linePosition <= n; linePosition++) {
    if (linePosition < linesMissing) {
      line += ' ';
    } else {
      line += '*';
    }
  }
  console.log(line);
  linesMissing--;
  line = '';
}


//Exercício 4 - faça uma pirâmide de asteriscos
line = '';
let symbolStart = n / 2;
let symbolFinish = symbolStart + 1;
linesMissing = symbolFinish;

for (let linesNumber = 1; linesNumber < linesMissing; linesNumber++) {
  for (let linePosition = 1; linePosition <= n; linePosition++) {
    if (linePosition < symbolStart || linePosition > symbolFinish) {
      line += ' ';
    } else {
      line += '*';
    }
  }
  console.log(line);
  symbolStart--;
  symbolFinish++;
  line = '';
}

// DEU CERTO!!!!!!!!!