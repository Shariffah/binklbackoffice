'use strict';
module.exports = (sequelize, DataTypes) => {
  const admin = sequelize.define('admin', {
    userId: {
      type : DataTypes.INTEGER,
      allowNull: false 
    },
    date_added: DataTypes.DATE
  }, {});
  admin.associate = function(models) {
    // associations can be defined here
    models.admin.belongsTo(models.users);
  };
  return admin;
};