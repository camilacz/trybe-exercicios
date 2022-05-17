const express = require('express');
const bookController = require('../controllers/bookController');

const bookRouter = express.Router();

bookRouter.get('/', bookController.getAll);
bookRouter.get('/:id', bookController.getById);

module.exports = bookRouter;