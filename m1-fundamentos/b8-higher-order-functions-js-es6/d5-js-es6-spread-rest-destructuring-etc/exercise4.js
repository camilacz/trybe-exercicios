// EXERCÍCIO: Escreva uma função 'filterPeople' que, dada uma lista de pessoas, retorna todas os australianos que nasceram no século 20.

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo
function filterPeople() {
  return people.filter(({ nationality, bornIn }) =>
    nationality === 'Australian' && bornIn > 1900 && bornIn <= 2000
  );
}

console.log(filterPeople());
