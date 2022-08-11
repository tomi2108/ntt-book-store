import axios from "axios";
import host from "services/controller.js";

const url = `${host}/api/users`;

export const getUser = async (username, password) => {
  try {
    const res = await axios.post(`${url}/${username}`, { password });
    return res.data;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};

export const createUser = async (user) => {
  try {
    const res = await axios.post(`${url}`, user);
    return res.data;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};

export const getCart = async (user) => {
  try {
    const res = await axios.get(`${url}/${user.username}/cart`);
    return res.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const updateCart = async (user, newCart) => {
  try {
    const res = await axios.put(`${url}/${user.username}/cart`, { newCart });
    return res.data;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};

export const getFavorites = async (user) => {
  try {
    const res = await axios.get(`${url}/${user.username}/favorites`);
    return res.data;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};

export const addFavorite = async (username, bookId) => {
  try {
    const res = await axios.put(`${url}/${username}/favorites`, { bookId });
    return res.data;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};

export const removeFavorite = async (username, bookId) => {
  try {
    const res = await axios.put(`${url}/${username}/favorites/remove`, { bookId });
    return res.data;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};


