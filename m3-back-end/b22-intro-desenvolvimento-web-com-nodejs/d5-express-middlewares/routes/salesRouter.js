const express = require('express');
const { validateProductName, validateInfos } = require('../middlewares/saleValidation');

const router = express.Router();
const CREATED = 201;

router.post('/', [
	validateProductName,
	validateInfos,
	(_req, res) => res.status(CREATED).json({ message: 'Venda cadastrada com sucesso' }),
]);

module.exports = router;
