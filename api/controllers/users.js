const User = require("../db/models/User");
const bcrypt = require("bcrypt");

const getUser = async (username, password) => {
  const user = await User.findOne({ where: { username } });
  if (user) {
    console.log(user.password, password);
    if (await bcrypt.compare(password, user.password)) {
      return user;
    } else {
      return null;
    }
  } else {
    throw new Error("User not found");
  }
};

const createUser = async (user) => {
  const userRegistered = await User.findOne({
    where: { username: user.username },
  });
  if (userRegistered) {
    throw new Error("User already registered");
  } else {
    const encryptedPassword = await bcrypt.hash(user.password, 10);
    const newUser = await User.create({ ...user, password: encryptedPassword });
    return newUser;
  }
};

const updateUserCart = async (username, newCart) => {
  newCart?.forEach((item) => {
    delete item.book.Author;
  });
  const userUpdated = await User.update(
    { cart: newCart },
    { where: { username } }
  );
  if (userUpdated) {
    return userUpdated;
  } else {
    throw new Error("User not found");
  }
};

module.exports = { getUser, createUser, updateUserCart };
