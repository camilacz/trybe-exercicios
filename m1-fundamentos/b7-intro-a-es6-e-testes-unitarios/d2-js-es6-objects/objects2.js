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
console.log(lesson2);

// Exercício 2
const listKeys = object => Object.keys(object);
console.log(listKeys(lesson2));

// Exercício 3
const objectSize = obj => Object.keys(obj).length;
console.log(objectSize(lesson2));

// Exercício 4
const listValues = obj => Object.values(obj);
console.log(listValues(lesson2));

// Exercício 5
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

//Exercício 6
const totalStudents = obj => {
  const lessons = Object.keys(obj);
  let total = 0;
  for (i in lessons) {
    total += obj[lessons[i]].numeroEstudantes;
  }
  return total;
}

console.log(totalStudents(allLessons));

// Exercício 7
const getValueByNumber = (obj, position) => Object.values(obj)[position];
console.log(getValueByNumber(lesson1, 0));
