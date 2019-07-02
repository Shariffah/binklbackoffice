'use strict';
module.exports = (sequelize, DataTypes) => {
  const subscriptions = sequelize.define('subscriptions', {
    clientId: {
      type : DataTypes.INTEGER,
      allowNull: false
    },
    sellerId: {
      type : DataTypes.INTEGER,
      allowNull: false
    },
    productId: {
      type : DataTypes.INTEGER,
      allowNull: false
    },
    date_start: DataTypes.DATE,
    date_expired: DataTypes.DATE,
    comments: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {});
  subscriptions.associate = function(models) {
    // associations can be defined here
    models.subscriptions.belongsTo(models.sellers);
    models.subscriptions.belongsTo(models.clients);
    models.subscriptions.belongsTo(models.products);
  };
  return subscriptions;
};