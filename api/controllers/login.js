const User = require("../db/models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const logIn = async (username, password) => {
  const user = await User.findOne({ where: { username } });
  if (user) {
    if (await bcrypt.compare(password, user.password)) {
      delete user.dataValues.password;
      const token = jwt.sign(user.dataValues, process.env.JWT_SECRET,{ expiresIn:60*60*24*7 });
      return { ...user.dataValues,token };
    } else {
      return null;
    }
  } else {
    throw new Error("User not found");
  }
};

module.exports = { logIn };