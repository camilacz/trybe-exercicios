const bookService = require('../services/bookService');

const getByAuthor = async (req, res) => {
  const { author } = req.query;

  const books = await bookService.getByAuthor(author);
  return res.status(200).json(books);
  // Se der errado a gente só chora :')
};

const getAll = async (req, res) => {
  const { author } = req.query;

  try {
    const books = author
      ? await bookService.getByAuthor(author)
      : await bookService.getAll();

    return res.status(200).json(books);
  } catch (err) {
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
  const { title, author, pageQuantity, publisher } = req.body;
  const book = { title, author, pageQuantity, publisher };

  try {
    const newBook = await bookService.create(book);
    return res.status(201).json(newBook);
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: 'Algo de errado não deu certo' });
  }
};

const update = async (req, res) => {
  const { title, author, pageQuantity, publisher } = req.body;
  const { id } = req.params;

  const book = { title, author, pageQuantity, publisher };

  try {
    const updated = await bookService.update(id, book);
    return res.status(200).json({ message: 'Book updated!' });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'oops' });
  }
};

const remove = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await bookService.remove(id);
    return res.status(204).end();
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Deu ruim hein' });
  }
};

module.exports = {
  getByAuthor,
  getAll,
  getById,
  create,
  update,
  remove,
};
