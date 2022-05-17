const bookService = require('../services/bookService');

const getAll = async (req, res) => {
  try {
    const books = await bookService.getAll();
  
    return res.status(200).json(books);
  } catch(err) {
    console.log(err.message);

    return res.status(500).json({ message: 'Falha no engano' });
  }
};

module.exports = {
  getAll,
};
