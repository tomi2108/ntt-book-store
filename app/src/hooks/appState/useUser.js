/* eslint-disable no-undef */
import { useLocalStorage } from "hooks/utils/useLocalStorage.js";
import { getCart, getFavorites } from "services/users.js";

export const useUser = () => {
  const { user , userStorage } = useLocalStorage("BookstoreUser","user","object");

  const logIn = (user) => {
    userStorage.setItem(user);
  };

  const logOut = () => {
    userStorage.removeItem();
  };

  const getUser = async () => {
    const userLocal = userStorage.getItem();
    if (userLocal) {

      const cart = await getCart(userLocal);
      const favorites = await getFavorites(userLocal);
      userStorage.setItem({ ...userLocal, cart,favorites });

    } else {
      userStorage.setItem(null);
    }
  };

  return [user, { logIn, logOut, getUser }];
};
