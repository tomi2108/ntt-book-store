const User = require("../db/models/User");
const bcrypt = require("bcrypt");

const createUser = async (user) => {
  const userRegistered = await User.findOne({
    where: { username: user.username },
  });
  if (userRegistered) {
    throw new Error("User already registered");
  } else {
    const encryptedPassword = await bcrypt.hash(user.password, 10);
    const newUser = await User.create({ ...user, password: encryptedPassword,cart:[],favorites:[] });
    return newUser;
  }
};

const updateUserCart = async (username, newCart) => {
  newCart?.forEach((item) => {
    delete item.book.Author;
    delete item.book.description;
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

const getCart = async (username) => {
  const user = await User.findOne({ where: { username } });
  if (user) {
    return user.cart;
  } else {
    throw new Error("User not found");
  }
};

const getFavorites = async (username) => {
  const user = await User.findOne({ where: { username } });
  if (user) {
    return user.favorites;
  } else {
    throw new Error("User not found");
  }
};

const addFavorite = async (username, bookId) => {
  const user = await User.findOne({ where: { username } });
  if (user) {
    const favorites = user.favorites;
    if(!favorites.includes(bookId)){
      const newFavorites = [...favorites, bookId];
      const userUpdated = await User.update(
        { favorites: newFavorites },
        { where: { username } }
      );
      if (userUpdated) return newFavorites;

      throw new Error("Error adding favorite");

    }
  } else {
    throw new Error("User not found");
  }
};

const removeFavorite = async (username, bookId) => {
  const user = await User.findOne({ where: { username } });
  if (user) {
    const favorites = user.favorites;
    if(favorites.includes(bookId)){
      const newFavorites = favorites.filter((id) => id !== bookId);
      const userUpdated = await User.update(
        { favorites: newFavorites },
        { where: { username } }
      );
      if (userUpdated) return newFavorites;

      throw new Error("Error removing favorite");

    }
  } else {
    throw new Error("User not found");
  }
};


module.exports = {  createUser, updateUserCart, getCart,getFavorites,addFavorite,removeFavorite };
