import axios from "axios";
import { host } from "services/controller.js";



const url = `${host}/api/login`;


export const logIn = async (username, password) => {
  try {
    const res = await axios.post(`${url}/${username}`, { password });
    return res.data;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};