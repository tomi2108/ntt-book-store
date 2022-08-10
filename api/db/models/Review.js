const { DataTypes } = require("sequelize");
const sequelize = require("../index.js");

const Review = sequelize.define("Review", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  bookId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rating:{
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Review;
