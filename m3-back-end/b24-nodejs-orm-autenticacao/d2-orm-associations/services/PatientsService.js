const { Patients, Plans, Surgeries } = require('../models');

const getAllPatientsPlans = async () => {
  const results = await Patients.findAll({
    include: {
      model: Plans, as: 'plan',
    }
  });

  return results;
};

const getAllPatientsSurgeries = async () => {
  const results = await Patients.findAll({
    include: {
      model: Surgeries, as: 'surgeries', through: { attributes: [] },
    }
  });

  return results;
}

const getPatientsByPlan = async (planId) => {
  const results = await Patients.findAll({
    where: { plan_id: planId }
  });

  return results;
};

module.exports = {
  getAllPatientsPlans,
  getAllPatientsSurgeries,
  getPatientsByPlan,
};