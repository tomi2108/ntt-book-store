import { useEffect, useState } from "react";

export const useNotification = (initialValue) => {
  const [notification, setNotification] = useState(initialValue);

  useEffect(() => {
    if (notification) {
      setTimeout(() => {
        setNotification(null);
      }, 3000);
    }
  }, [notification]);

  return [notification, setNotification];
};
