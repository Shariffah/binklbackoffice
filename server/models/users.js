'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    type: DataTypes.INTEGER,
    contact: DataTypes.STRING,
    address: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  users.associate = function(models) {
    models.users.hasMany(models.sellers);
    models.users.hasMany(models.admin);
  };
  return users;
};