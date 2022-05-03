const fs = require('fs').promises;

const arrayToFile = async () => {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

  const writingPromises = strings.map((str, index) => fs.writeFile(`./file${index + 1}.txt`, str));
  await Promise.all(writingPromises);

  // PARTE II
  const fileNames = strings.map((_str, index) => `file${index + 1}.txt`);
  const readingPromises = fileNames.map(
    (file) => fs.readFile(file, 'utf-8')
  );
  const allContents = await Promise.all(readingPromises);
  const newContent = allContents.join(' ');

  await fs.writeFile('./fileAll.txt', newContent);
};

arrayToFile();
