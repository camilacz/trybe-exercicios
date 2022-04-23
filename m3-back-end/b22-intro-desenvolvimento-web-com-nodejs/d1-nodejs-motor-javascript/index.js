const readline = require('readline-sync');

const scripts = [
  { name: 'Calcular IMC', script: './imc.js' },
  { name: 'Calcular velocidade média', script: './velocidade.js' },
  { name: 'Jogo de adivinhação', script: './sorteio.js' },
];

const chooseScript = () => {
  let question = scripts
    .map(({ name }, index) => `${index + 1} - ${name}`);

  // unfisht add to start of array
  question.unshift('Escolha um número para executar o script correspondente');
  question.push('\nSua escolha: ');

  // to break text
  question = question.join('\n');

  const chosenScript = readline.questionInt(question);

  const script = scripts[chosenScript - 1];

  if (!script) return console.log('Número inválido. Saindo...');

  // No dia a dia, é mais comum utilizar outras formas de executar arquivos externos
  // No entanto, para fins didáticos, o `require` atende por enquanto.
  require(script.script);
};

chooseScript();
