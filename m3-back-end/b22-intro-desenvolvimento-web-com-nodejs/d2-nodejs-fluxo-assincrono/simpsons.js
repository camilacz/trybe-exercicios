const fs = require('fs').promises;

const SIMPSONS_FILE = 'simpsons.json';
const FAMILY_SIMPSONS = 'simpsonFamily.json';

const readFile = async (file) => {
  const content = await fs.readFile(file);
  const simpsons = JSON.parse(content);

  return simpsons;
};

const readAll = async () => {
  try {
    const content = await readFile(SIMPSONS_FILE);
    content.forEach(({ id, name }) => console.log(`${id} - ${name}`));
  } catch (err) {
    console.log(err.message);
  }
};

// readAll();

const getCharacterById = async (id) => {
  console.log(id);
  const content = await readFile(SIMPSONS_FILE);
  const chosenChar = content.find((char) => char.id === String(id));

  if (!chosenChar) throw new Error('id não encontrado');

  return chosenChar;
};

// getCharacterById(Math.floor(Math.random() * 15 + 1))
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err.message));

const removeByIds = async (ids) => {
  const content = await readFile(SIMPSONS_FILE);
  const newContent = content.filter(({ id }) => !ids.includes(Number(id)));

  fs.writeFile(SIMPSONS_FILE, JSON.stringify(newContent));
};

// removeByIds([10, 6]);

const createSimpsonFamilyFile = async () => {
  const content = await readFile(SIMPSONS_FILE);
  const family = content.filter(({ id }) => id >= 1 && id <= 4);

  fs.writeFile(FAMILY_SIMPSONS, JSON.stringify(family));
};

// createSimpsonFamilyFile();

const addCharacterToFamily = async (id) => {
  const simpsons = await readFile(SIMPSONS_FILE);
  const character = simpsons.find((char) => char.id === String(id));

  const family = await readFile(FAMILY_SIMPSONS);
  const newContent = [...family, character];

  fs.writeFile(FAMILY_SIMPSONS, JSON.stringify(newContent));
};

// addCharacterToFamily(8);

const replaceNelson = async () => {
  const content = await readFile(FAMILY_SIMPSONS);
  const noNelson = content.filter(({ id }) => Number(id) !== 8);
  const withMaggie = [...noNelson, { id: '15', name: 'Maggie Simpson'}];

  return fs.writeFile(FAMILY_SIMPSONS, JSON.stringify(withMaggie));
};

replaceNelson();
