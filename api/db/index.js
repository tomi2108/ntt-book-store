const {
  database,
  username,
  password,
  host,
  dialect,
  logging,
} = require("./config.js");
const { Sequelize } = require("sequelize");


const sequelize = new Sequelize(database, username, password, {
  dialect,
  logging,
  host,
});

module.exports = sequelize;
