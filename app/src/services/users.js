import axios from "axios";
import host from "./controller.js";

const url = `${host}/api/users`;

export const getUser = async (username,password) => {
  try {
    const res = await axios.post(`${url}/${username}`,{ password });
    return res.data;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};

export const createUser = async (user) => {
  try {
    const res = await axios.post(`${url}`,user);
    return res.data;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};
