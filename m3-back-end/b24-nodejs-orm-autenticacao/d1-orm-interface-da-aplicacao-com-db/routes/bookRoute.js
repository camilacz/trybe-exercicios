const express = require('express');
const bookController = require('../controllers/bookController');

const bookRouter = express.Router();

bookRouter.get('/', bookController.getAll);
bookRouter.get('/search', bookController.getByAuthor);
bookRouter.get('/:id', bookController.getById);
bookRouter.post('/', bookController.create);
bookRouter.put('/:id', bookController.update);
bookRouter.delete('/:id', bookController.remove);

module.exports = bookRouter;