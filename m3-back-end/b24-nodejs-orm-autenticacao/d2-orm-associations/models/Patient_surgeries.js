module.exports = (Sequelize, DataTypes) => {
  const PatientSurgeries = Sequelize.define(
    'Patient_surgeries',
    {},
    { timestamps: false },
  );

  PatientSurgeries.associate = (models) => {
    models.Surgeries.belongsToMany(models.Patients, {
      foreignKey: 'surgery_id',
      otherKey: 'patient_id',
      as: 'patients',
      through: PatientSurgeries,
    });
    models.Patients.belongsToMany(models.Surgeries, {
      foreignKey: 'patient_id',
      otherKey: 'surgery_id',
      as: 'surgeries',
      through: PatientSurgeries,
    })
  };

  return PatientSurgeries
};