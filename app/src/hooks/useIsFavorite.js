import { useEffect, useState } from "react";

export const useIsFavorite = (id,favorites) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(favorites.includes(id));
  },[favorites]);

  return isFavorite;
};