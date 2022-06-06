const express = require('express');
const PatientsController = require('../controllers/PatientsController');

const router = express.Router();

router.get('/plans', PatientsController.getAllPatientsPlans);
router.get('/surgeries', PatientsController.getAllPatientsSurgeries);

module.exports = router;