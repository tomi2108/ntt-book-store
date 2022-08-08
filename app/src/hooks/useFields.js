import { useState } from "react";

export const useFields = (obj) => {

  const [values, setValues] = useState(obj);

  const onChange = (evt) => {
    setValues(prev => ({ ...prev, [evt.target.name]: evt.target.value }));
  };





  const reset = () => {
    setValues(obj);
  };

  return { reset, values, onChange  };
};
