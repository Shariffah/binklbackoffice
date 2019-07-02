'use strict';
module.exports = (sequelize, DataTypes) => {
  const clients = sequelize.define('clients', {
    departmentId: {
      type : DataTypes.INTEGER,
      allowNull: false
    },
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    adress: DataTypes.STRING,
    contact: DataTypes.STRING,
    email: DataTypes.STRING,
    date_added: DataTypes.DATE,
    status: DataTypes.BOOLEAN
  }, {});
  clients.associate = function(models) {
    // associations can be defined here
    models.clients.belongsTo(models.departments);
    models.clients.hasMany(models.subscriptions);
  };
  return clients;
};