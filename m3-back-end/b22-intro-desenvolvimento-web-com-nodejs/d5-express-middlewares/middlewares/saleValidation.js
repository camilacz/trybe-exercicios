const checkDate = require('../utils/dateValidation');

// STATUS CODE
const BAD_REQUEST = 400;

const validateProductName = (req, _res, next) => {
	const { productName } = req.body;

	if (!productName) {
		return next({ status: BAD_REQUEST, message: 'O campo productName é obrigatório' });
	}

	if (productName.length < 4) {
		return next({ status: BAD_REQUEST, message: 'O campo productName deve ter pelo menos 4 caracteres' });
	}

	next();
};

const validateInfos = (req, _res, next) => {
	const { infos } = req.body;

	if (!infos) {
		return next({ status: BAD_REQUEST, message: 'O campo infos é obrigatório' });
	}

	if (!infos.saleDate) {
		return next({ status: BAD_REQUEST, message: 'O campo saleDate é obrigatório' });
	}

	if (!checkDate(infos.saleDate)) {
		return next({ status: BAD_REQUEST, message: 'O campo saleDate não é uma data válida' });
	}

	if (!infos.warrantyPeriod) {
		return next({ status: BAD_REQUEST, message: 'O campo warrantyPeriod é obrigatório' });
	}

	if (infos.warrantyPeriod < 1 || infos.warrantyPeriod > 3) {
		return next({ status: BAD_REQUEST, message: 'O campo warrantyPeriod precisa estar 1 e 3' });
	}

	return next();
};

module.exports = {
	validateProductName,
	validateInfos,
};
