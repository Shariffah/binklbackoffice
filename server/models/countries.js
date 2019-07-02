'use strict';
module.exports = (sequelize, DataTypes) => {
  const countries = sequelize.define('countries', {
    name: DataTypes.STRING,
    code: DataTypes.STRING
  }, {});
  countries.associate = function(models) {
    // associations can be defined here
    models.countries.hasMany(models.departments);
  };
  return countries;
};