require("dotenv").config();

/* const productionConfig = {
  dialect: "mysql",
  port: process.env.MYSQLPORT,
  database: process.env.MYSQLDATABASE,
  username: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  host: process.env.MYSQLHOST,
  logging: console.log,
};

const developmentConfig = {
  dialect: "mysql",
  port: process.env.MYSQL_DEVELOPMENT_PORT,
  database: process.env.MYSQL_DEVELOPMENT_DATABASE,
  username: process.env.MYSQL_DEVELOPMENT_USER,
  password: process.env.MYSQL_DEVELOPMENT_PASSWORD,
  host: process.env.MYSQL_DEVELOPMENT_HOST,
  logging: console.log,
}; */

const devUrl = process.env.DATABASE_URL;
const prodUrl = process.env.MYSQL_URL;

module.exports =
  process.env.NODE_ENV === "production" ? prodUrl : devUrl;
