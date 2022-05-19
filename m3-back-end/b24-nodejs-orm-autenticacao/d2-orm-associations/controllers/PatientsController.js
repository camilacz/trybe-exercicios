const PatientsService = require('../services/PatientsService');

const getAllPatientsPlans = async (req, res) => {
  const results = await PatientsService.getAllPatientsPlans();

  return res.status(200).json(results);
};

module.exports = {
  getAllPatientsPlans,
}