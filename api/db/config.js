require("dotenv").config();

const productionConfig = {
  dialect: "mysql",
  database: process.env.MYSQL_PRODUCTION_DATABASE,
  username: process.env.MYSQL_PRODUCTION_USER,
  password: process.env.MYSQL_PRODUCTION_PASSWORD,
  host: process.env.MYSQL_PRODUCTION_HOST,
  logging: console.log,
};

const developmentConfig = {
  dialect: "mysql",
  database: process.env.MYSQL_DEVELOPMENT_DATABASE,
  username: process.env.MYSQL_DEVELOPMENT_USER,
  password: process.env.MYSQL_DEVELOPMENT_PASSWORD,
  host: process.env.MYSQL_DEVELOPMENT_HOST,
  logging: console.log,
};

module.exports =
  process.env.NODE_ENV === "production" ? productionConfig : developmentConfig;
