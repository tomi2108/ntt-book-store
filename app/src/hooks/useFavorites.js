import { useEffect, useState } from "react";
import { addFavorite, removeFavorite } from "services/users.js";

export const useFavorites = (user) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (user) {
      setFavorites(user.favorites);
    }else{
      setFavorites([]);
    }
  }, [user]);

  const addToFavorites = async (bookId) => {
    const newFavorites = [...favorites, bookId];
    setFavorites(newFavorites);
    await addFavorite(user.username, bookId);
  };

  const removeFromFavorites = async (bookId) => {
    const newFavorites = favorites.filter((favorite) => favorite !== bookId);
    setFavorites(newFavorites);
    await removeFavorite(user.username, bookId);
  };


  return [favorites, { addToFavorites, removeFromFavorites }];
};
