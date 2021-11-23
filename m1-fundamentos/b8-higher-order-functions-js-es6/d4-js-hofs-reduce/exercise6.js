// EXERCÍCIO 6: Crie um objeto, no formato { name: NOME_DO_ALUNO, average: MÉDIA_DAS_NOTAS, } a partir das informações abaixo:

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

// [...] Considere grades[x] referente a students[x]. Segue o resultado esperado:

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

function studentAverage() {
  // escreva seu código aqui
  const totalGrades = grades.map((studentGrades) =>
    studentGrades.reduce((sum, grade) => sum + grade), 0);
  return students.map((student, i) => ({
    name: student,
    average: totalGrades[i] / grades[i].length,
  }));
}

console.log(studentAverage());
