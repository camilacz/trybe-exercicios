const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercício 1
const addNewKey = (object, newKey, value) => object[newKey] = value;
addNewKey(lesson2, 'turno', 'noite');

// Exercício 2
const listKeys = object => Object.keys(object);
console.log(listKeys(lesson2));

// Exercício 3
const objectSize = obj => Object.keys(obj).length;
console.log(objectSize(lesson1));
