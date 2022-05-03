const mathThis = (a, b, c) => {
  // yes, math is a verb now o.O

  return new Promise((resolve, reject) => {

    const params = [a, b, c];
    if (params.some((param) => typeof param !== 'number')) {
      return reject(new Error('Informe apenas números'));
    }

    const result = (a + b) * c;

    if (result < 50) return reject(new Error('Valor muito baixo'));

    resolve(result);
  });
};

// // Todos números
// mathThis(5, 5, 10)
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err.message));

// // Valor < 50
// mathThis(1, 1, 10)
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err.message));

// // Nem todos são números
// mathThis(5, 2, 'potato')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err.message));

// EXERCÍCIO 2
const getRandomNumber = () => Math.floor(Math.random() * 100 + 1);

const callMathThis = () => {
  const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);

  console.log('Números aleatórios: ', randomNumbers);

  mathThis(...randomNumbers)
    .then((result) => console.log(result))
    .catch((err) => console.log(err.message));
};

callMathThis();
