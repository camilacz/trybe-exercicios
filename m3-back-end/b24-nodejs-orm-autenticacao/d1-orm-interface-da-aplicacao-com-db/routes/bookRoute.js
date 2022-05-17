const express = require('express');
const bookController = require('../controllers/bookController');

const bookRouter = express.Router();

bookRouter.get('/', bookController.getAll);

module.exports = bookRouter;