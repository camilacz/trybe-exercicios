module.exports = (Sequelize, DataTypes) => {
  const Plans = Sequelize.define('Plans', {
    plans_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    coverage: DataTypes.STRING,
    price: DataTypes.DOUBLE,
  },
  {
    timestamps: false,
  });

  Plans.associate = (models) => {
    Plans.hasMany(models.Patients, {
      foreignKey: 'plan_id',
      as: 'patients',
    })
  }

  return Plans;
};
