const { Patients, Plans } = require('../models');

const getAllPatientsPlans = async () => {
  const results = await Patients.findAll({
    include: {
      model: Plans, as: 'plan',
    }
  });

  return results;
};

module.exports = {
  getAllPatientsPlans,
};