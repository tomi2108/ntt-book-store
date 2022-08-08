import { useState } from "react";

export const useModal= () => {
  const [show, setShow] = useState(false);

  const hideModal = () => setShow(false);
  const showModal = () => setShow(true);

  return {
    show,
    hideModal,
    showModal,
  };
};