const express = require('express');
const fsHandler = require('./fsHandler');

const app = express();
const PORT = 3000;

// STATUS CODE
const SUCCES = 200;
const NO_CONTENT = 204;
const UNAUTHORIZED = 401;
const NOT_FOUND = 404;
const CONFLICT = 409;

app.use(express.json());

// Exercício 1
app.get('/ping', (_req, res) => res.status(SUCCES).json({ message: 'pong' }));

// Exercício 2
app.post('/hello', (req, res) => {
  const { name } = req.body;
  return res.status(SUCCES).json({ message: `Hello, ${name}!` });
});

// Exercício 3
app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if (age > 17) return res.status(SUCCES).json({ message: `Hello, ${name}!` });

  return res.status(UNAUTHORIZED).json({ message: 'Unauthorized' });
});

// Exercício 4
app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;

  return res.status(SUCCES).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

// Exercício 5-A
app.get('/simpsons', async (_req, res) => {
  try {
    const simpsons = await fsHandler.reading();

    return res.status(SUCCES).json(simpsons);
  } catch(err) {
    console.log(err.message);
  }

});

// Exercício 5-B
app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const simpsons = await fsHandler.reading();
    const chosenChar = simpsons.find((char) => char.id === id);

    if (!chosenChar) {
      return res.status(NOT_FOUND).json({ message: 'simpson not found' });
    }

    return res.status(SUCCES).json(chosenChar);
  } catch(err) {
    console.log(err.message);
  }
});

// Exercício 5-C
app.post('/simpsons', async (req, res) => {
  const { id, name } = req.body;

  const simpsons = await fsHandler.reading();
  
  if (simpsons.some((char) => char.id === id)) {
    return res.status(CONFLICT).json({ message: 'id already exists' });
  }

  fsHandler.writing([...simpsons, { id, name }]);

  return res.status(NO_CONTENT).end();
});

app.listen(PORT, () => console.log('heeeey :)'));
