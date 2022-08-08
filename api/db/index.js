const url = require("./config.js");
const { Sequelize } = require("sequelize");


const sequelize = new Sequelize(url);

module.exports = sequelize;
