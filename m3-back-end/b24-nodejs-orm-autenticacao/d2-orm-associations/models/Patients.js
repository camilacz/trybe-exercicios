module.exports = (Sequelize, DataTypes) => {
  const Patients = Sequelize.define(
    'Patients',
    {
      patient_id: DataTypes.INTEGER,
      fullname: DataTypes.STRING,
      plan_id: DataTypes.INTEGER,
    },
    {
      timestamps: false,
    }
  );

  Patients.associate = (models) => {
    Patients.belongsTo(models.Plans, { foreignKey: 'plan_id', as: 'plan' })
  }

  return Patients;
};
