/* eslint-disable no-undef */
import { useState } from "react";

export const useUser = () => {
  const [user,setUser] = useState(null);

  const logIn = (user) => {
    setUser(user);
    localStorage.setItem("BookstoreUser", JSON.stringify(user));
  };

  const logOut = () => {
    setUser(null);
    localStorage.removeItem("BookstoreUser");
  };

  const getUser = () => {
    const user = localStorage.getItem("BookstoreUser");
    if(user){
      setUser(JSON.parse(user));
    }
  };


  return [user,{ logIn ,logOut, getUser } ];
};
