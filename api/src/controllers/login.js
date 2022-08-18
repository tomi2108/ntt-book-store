const User = require("../db/models/User");
const bcrypt = require("bcrypt");


const logIn = async (username, password) => {
  const user = await User.findOne({ where: { username } });
  if (user) {
    if (await bcrypt.compare(password, user.password)) {
      delete user.dataValues.password;
      return user;
    } else {
      return null;
    }
  } else {
    throw new Error("User not found");
  }
};

module.exports = { logIn };