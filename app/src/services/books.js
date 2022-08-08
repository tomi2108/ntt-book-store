import axios from "axios";
import host from "services/controller.js";

const url = `${host}/api/books`;

export const getBooks = async () => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (_) {
    return null;
  }
};

export const getBookById = async (id) => {
  try {
    const res = await axios.get(`${url}/${id}`);
    return res.data;
  } catch (_) {
    return null;
  }
};

export const addComment = async (text,userId,bookId) => {
  try {
    const res = await axios.post(`${url}/${bookId}/comment`, { text,userId });
    return res.data;
  }catch(_){
    return null;
  }
};
