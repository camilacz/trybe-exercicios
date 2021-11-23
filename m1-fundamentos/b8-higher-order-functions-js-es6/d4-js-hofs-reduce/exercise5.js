// EXERCÍCIO: Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra 'a' maiúscula ou minúscula.

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce(
    (sum, name) =>
      sum + name.toLowerCase().split('').reduce((count, letter) => {
        if (letter === 'a') return count + 1;
        return count;
      }, 0), 0);
}

console.log(containsA());
