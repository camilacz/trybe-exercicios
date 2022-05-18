const express = require('express');
const bookController = require('../controllers/bookController');

const bookRouter = express.Router();

bookRouter.get('/', bookController.getAll);
bookRouter.get('/:id', bookController.getById);
bookRouter.post('/', bookController.create);
bookRouter.put('/:id', bookController.update);

module.exports = bookRouter;