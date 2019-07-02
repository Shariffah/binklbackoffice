'use strict';
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    date_added: DataTypes.DATE,
    active: DataTypes.BOOLEAN,
    commission_main: DataTypes.STRING,
    commission_first_line: DataTypes.STRING,
    commission_second_line: DataTypes.STRING
  }, {});
  products.associate = function(models) {
    // associations can be defined here
    models.products.hasMany(models.subscriptions)
  };
  return products;
};