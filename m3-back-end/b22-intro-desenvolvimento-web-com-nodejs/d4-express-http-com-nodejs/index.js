const express = require('express');

const app = express();
const PORT = 3000;

// STATUS CODE
const SUCCES = 200;
const UNAUTHORIZED = 401;

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

app.listen(PORT, () => console.log('heeeey :)'));
