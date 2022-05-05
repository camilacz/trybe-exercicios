const fs = require('fs').promises;

const SIMPSONS_FILE = 'simpsons.json';

const writing = (input) => fs.writeFile(SIMPSONS_FILE, JSON.stringify(input));

const reading = async () => {
  const content = await fs.readFile(SIMPSONS_FILE);
  const simpsons = JSON.parse(content);
  return simpsons;
};

module.exports = {
  writing,
  reading
};
