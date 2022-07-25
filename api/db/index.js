const { database, username, password, ...options } = require("./config.js");
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(database, username, password, options);

module.exports = sequelize;
