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