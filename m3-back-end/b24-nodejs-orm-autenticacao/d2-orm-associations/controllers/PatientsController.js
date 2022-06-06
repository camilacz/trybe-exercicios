const PatientsService = require('../services/PatientsService');

const getAllPatientsPlans = async (_req, res) => {
  const results = await PatientsService.getAllPatientsPlans();

  return res.status(200).json(results);
};

const getAllPatientsSurgeries = async (_req, res) => {
  try {
    const results = await PatientsService.getAllPatientsSurgeries();

    return res.status(200).json(results);
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: 'Falha no engano' })
  }
};

const getPatientsByPlan = async (req, res) => {
  const { id } = req.params;

  try {
    const results = await PatientsService.getPatientsByPlan(id);

    return res.status(200).json(results);
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: 'Falha no engano' });
  }
};

module.exports = {
  getAllPatientsPlans,
  getAllPatientsSurgeries,
  getPatientsByPlan,
}