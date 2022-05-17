const bookService = require('../services/bookService');

const getAll = async (_req, res) => {
  try {
    const books = await bookService.getAll();
  
    return res.status(200).json(books);
  } catch(err) {
    console.log(err.message);

    return res.status(500).json({ message: 'Falha no engano' });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  const book = await bookService.getById(id);

  // Shouldn't this be done in the Service layer 🧐
  if (book.length === 0) {
    return res.status(404).json({ message: 'Book not found' });
  }

  return res.status(200).json(book);
};

const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const book = { title, author, pageQuantity };

  try {
    const newBook = await bookService.create(book);
    return res.status(201).json(newBook);
  } catch(err) {
    console.log(err.message);
    return res.status(500).json({ message: 'Algo de errado não deu certo' });
  }
};

module.exports = {
  getAll,
  getById,
  create,
};
