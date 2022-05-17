const bookService = require('../services/bookService');

const getAll = async (req, res) => {
  const books = await bookService.getAll();

  return res.status(200).json(books);
};

module.exports = {
  getAll,
};
