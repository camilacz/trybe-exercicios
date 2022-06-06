module.exports = (Sequelize, DataTypes) => {
  const Surgeries = Sequelize.define('Surgeries', {
    surgery_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    specialty: DataTypes.STRING,
    doctor: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  return Surgeries;
};