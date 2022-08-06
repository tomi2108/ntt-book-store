/* eslint-disable no-undef */
import { useState } from "react";
import { getCart } from "services/users.js";

export const useUser = () => {
  const [user, setUser] = useState(null);

  const logIn = (user) => {
    setUser(user);
    localStorage.setItem("BookstoreUser", JSON.stringify(user));
  };

  const logOut = () => {
    setUser(null);
    localStorage.removeItem("BookstoreUser");
  };

  const getUser = async () => {
    const userLocal = localStorage.getItem("BookstoreUser");
    const user = userLocal ? JSON.parse(userLocal) : null;
    if (user) {
      const cart = await getCart(user);
      setUser({ ...user, cart });
    } else {
      setUser(null);
    }
  };

  return [user, { logIn, logOut, getUser }];
};
