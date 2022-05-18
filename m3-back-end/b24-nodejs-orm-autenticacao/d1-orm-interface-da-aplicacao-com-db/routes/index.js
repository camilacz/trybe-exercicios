const express = require('express');
const bookRouter = require('./bookRoute');

const router = express.Router();

router.use('/books', bookRouter);

module.exports = router;