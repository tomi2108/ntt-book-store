require("dotenv").config();
require("./db/index.js");

const http = require("http");
const api = require("./api.js");

const  connectToDb = require("./db/connect.js");


const server = http.createServer(api);
const PORT = process.env.PORT || 3001;


connectToDb().then(() => {
  server.listen(PORT, () => {
    console.log("Connection to data base has been established successfully.");
    console.log(`Server running on port ${PORT}`);
  });
});
