const { DataTypes } = require("sequelize");
const sequelize = require("../index.js");

const Comment = sequelize.define("Comment", {
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
});

module.exports = Comment;
