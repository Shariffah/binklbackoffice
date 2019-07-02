'use strict';
module.exports = (sequelize, DataTypes) => {
  const departments = sequelize.define('departments', {
    countryId: {
      type : DataTypes.INTEGER,
      allowNull: false 
    },
    name: DataTypes.STRING
  }, {});
  departments.associate = function(models) {
    // associations can be defined here
    models.departments.hasMany(models.sellers);
    models.departments.hasMany(models.clients);
    models.departments.belongsTo(models.countries);
  };
  return departments;
};