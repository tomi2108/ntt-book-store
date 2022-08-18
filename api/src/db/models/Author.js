const { DataTypes } = require("sequelize");
const sequelize = require("../index.js");

const Author = sequelize.define("Author", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  dateOfBirth: {
    type: DataTypes.DATE,
    allowNull: false,
  },

  booksIds: {
    type: DataTypes.JSON,
    allowNull: true,
  },
});

module.exports = Author;
