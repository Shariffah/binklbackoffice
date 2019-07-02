'use strict';
module.exports = (sequelize, DataTypes) => {
  const sellers = sequelize.define('sellers', {
    userId: {
      type : DataTypes.INTEGER,
      allowNull: false
    },
    departmentId: {
      type : DataTypes.INTEGER,
      allowNull: false
    },
    parent: DataTypes.INTEGER,
    date_added: DataTypes.DATE,
    status: DataTypes.BOOLEAN
  }, {});
  sellers.associate = function(models) {
    // associations can be defined here
    models.sellers.belongsTo(models.users);
    models.sellers.belongsTo(models.departments);
    models.sellers.hasMany(models.subscriptions);
  };
  return sellers;
};