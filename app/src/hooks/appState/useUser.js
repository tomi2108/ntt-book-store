/* eslint-disable no-undef */
import { useLocalStorage } from "hooks/utils/useLocalStorage.js";
import { setToken } from "services/controller.js";
import { logIn as serviceLogin } from "services/login.js";
import { getCart, getFavorites } from "services/users.js";

export const useUser = () => {
  const { user , userStorage } = useLocalStorage("BookstoreUser","user","object");

  const logIn = async (username,password) => {
    try {
      const loggedUser = await serviceLogin(username,password);
      setToken(loggedUser.token);
      userStorage.setItem(loggedUser);
    }catch(err){
      throw new Error(err);
    }
  };

  const logOut = () => {
    userStorage.removeItem();
  };

  const getUser = async () => {
    const userLocal = userStorage.getItem();
    if (userLocal) {
      setToken(userLocal.token);
      const cart = await getCart(userLocal);
      const favorites = await getFavorites(userLocal);
      userStorage.setItem({ ...userLocal, cart,favorites });

    } else {
      userStorage.setItem(null);
    }
  };

  return [user, { logIn, logOut, getUser }];
};
