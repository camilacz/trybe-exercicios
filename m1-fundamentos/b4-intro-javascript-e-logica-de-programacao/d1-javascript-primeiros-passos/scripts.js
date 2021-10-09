//atividade 1
const a = 34;
const b = 7;

console.log("Adição: " + (a + b));
console.log("Subtração: " + (a - b));
console.log("Multiplicação: " + (a * b));
console.log("Divisão: " + (a / b));
console.log("Módulo: " + (a % b));

//atividade 2
if (a > b) {
  console.log("'a' é maior do que 'b'");
} else {
  console.log("'b' é maior do que 'a'");
}

//atividade 3
const c = 10;

if (a > b && a > c) {
  console.log("'a' é o maior número: " + a);
} else if (b > a && b > c) {
  console.log("'b' é o maior número: " + b);
} else {
  console.log("'c' é o maior número: " + c);
}

//atividade 4
const number = -17;

if (number > 0) {
  console.log("positive");
} else if (number < 0) {
  console.log("negative");
} else {
  console.log("zero");
}

//atividade 5
const angleA = 28;
const angleB = 60;
const angleC = 92;

if (angleA > 0 && angleB > 0 && angleC > 0) {
  if (angleA + angleB + angleC === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log("Erro: âmgulo inválido");
}

//atividade 6

//atividade 7
const grade = 82;


if (grade >= 0 && grade <= 100) {
  if (grade >= 90) {
    console.log("A");
  } else if (grade >= 80) {
    console.log("B");
  } else if (grade >= 70) {
    console.log("C");
  } else if (grade >= 60) {
    console.log("D");
  } else if (grade >= 50) {
    console.log("E");
  } else if (grade < 50) {
    console.log("F")
  }
} else {
  console.log("Error: unexpected value in 'grade'");
}
