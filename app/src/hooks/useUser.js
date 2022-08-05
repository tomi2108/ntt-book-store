/* eslint-disable no-undef */
import { useState } from "react";

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

  const getUser = () => {
    const userLocal = localStorage.getItem("BookstoreUser");
    if (userLocal) {
      setUser(JSON.parse(userLocal));
    } else {
      setUser(null);
    }
  };

  return [user, { logIn, logOut, getUser }];
};
