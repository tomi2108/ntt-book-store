const { DataTypes } = require("sequelize");
const sequelize = require("../index.js");

const Book = sequelize.define("Book", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  description: {
    type: DataTypes.STRING(1000),
    allowNull: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  authorId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  copiesInStock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Book;
