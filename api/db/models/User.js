const { DataTypes } = require("sequelize");
const sequelize = require("..");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  booksBoughtIds: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  dateOfBirth: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  cart: {
    type: DataTypes.JSON,
    allowNull: true,
  }

});

module.exports = User;
