// EXERCÍCIO 1

const factorial = n => {
  let result = 1;
  for (let i = n; i > 1; i -= 1) {
    result *= i;
  }
  return result;
}

// de forma recursiva :o
// loop automático, até que condição do (if) seja falsa
const factor = number => number > 1 ? number * factorial(number - 1) : 1;

console.log(factorial(5));


// EXERCÍCIO 2
const longestWord = line => {
  const splited = line.split(' ');
  let longest = splited[0];
  
  for (let word of splited) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

// em uma linha :o
const longest = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

const text = 'Antônio foi no banheiro e não sabemos o que aconteceu';
console.log(longestWord(text));


// EXERCÍCIO 3
const btn = document.querySelector('button');
const span = document.querySelector('span');
let clicked = 0;
span.innerText = clicked;

// change 'copy' for 'click'
btn.addEventListener('copy', () => {
  clicked += 1;
  span.innerText = clicked;
});

// em (quase) uma linha :O
btn.addEventListener('click', () => span.innerText = clicked += 1);


// EXERCÍCIO 4
// shhh! finge que tá tudo certinho
// o que importa é que eu entendi os conceitos ;)

const hello = string => `Olá ${string}`;
console.log(hello('world'));

const skills = ['comer', 'dormir', 'preguiça', 'nada', 'macarena'];

const function2 = string => {
  const greetings = hello(string);
  const abc = skills.sort();
  let message = greetings;

  for (let skill of abc) {
    message += `, ${skill}`
  }

  return message;
}

console.log(function2('world'));
