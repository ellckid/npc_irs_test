const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Shop = sequelize.define('shop', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING }, // Sequelize.STRING == VARCHAR(255)
  date: { type: DataTypes.DATEONLY },
  balance: { type: DataTypes.DECIMAL }, // Sequelize.DECIMAL == NUMERIC
  workers: { type: DataTypes.INTEGER }
})

const Product = sequelize.define('product', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING }, // Sequelize.STRING == VARCHAR(255)
  date: { type: DataTypes.DATEONLY },
  price: { type: DataTypes.DECIMAL }, // Sequelize.DECIMAL == NUMERIC
  amount: { type: DataTypes.INTEGER }
})

Shop.hasMany(Product)
Product.belongsTo(Shop)

module.exports = {
  Shop,
  Product
}
