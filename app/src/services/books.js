import axios from "axios";
import host from "./controller.js";

const url = `${host}/api/books`;

export const getBooks = async () => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (_) {
    return null;
  }
};
