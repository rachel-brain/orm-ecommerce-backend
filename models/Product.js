// import important parts of sequelize library
const {
  Model,
  DataTypes
} = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model and define columns
Product.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(6, 2),
    allowNull: false,
    validate: {
      isDecimal: true,
    }
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    default: 10,
    validate: {
      isNumeric: true,
    }
  },
  // stores a reference of the 'id' of the 'category' that this product fits in
  category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'category',
      key: 'id',
    },
  },
}, {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'product',
});

module.exports = Product;