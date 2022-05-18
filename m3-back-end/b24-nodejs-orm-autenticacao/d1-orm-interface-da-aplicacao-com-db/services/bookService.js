const { Book } = require('../models');

const getByAuthor = async (author) => {
  const books = await Book.findAll({ where: { author } });
  return books;
};

const getAll = async () => {
  const books = await Book.findAll();

  return books;
};

const getById = async (id) => {
  const book = Book.findAll({ where: { id } });
  return book;
};

const create = async (book) => {
  const newBook = await Book.create(book);
  return newBook;
};

const update = async (id, book) => {
  const updated = await Book.update(book, { where: { id } });
  return updated;
};

const remove = async (id) => {
  const result = await Book.destroy({ where: { id } });
  return result;
};

module.exports = {
  getByAuthor,
  getAll,
  getById,
  create,
  update,
  remove
};