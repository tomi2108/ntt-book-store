import { useState } from "react";

export const useFields = (obj) => {
  const [fields, setFields] = useState(obj);

  const onChange = (evt) => {
    setFields((prev) => ({ ...prev, [evt.target.name]: { ...fields[evt.target.name], value: evt.target.value } }));
  };


  const _parseKey = (key) => {
    return key.replace(/([A-Z])/g, " $1").replace(/^./, (firstLetter) => {
      return firstLetter.toUpperCase();
    }).trim();
  };

  const validateComplete = (handleErrorMessage) => {
    let isValid = true;
    Object.keys(fields)
      .sort((a,b) => fields[b].order - fields[a].order)
      .forEach((key) => {
        if (!fields[key].value) {
          const parsedKey = _parseKey(key);
          handleErrorMessage(`Please enter ${parsedKey}`);
          isValid = false;
        }
      }
      );
    return isValid;
  };


  const reset = () => {
    setFields(obj);
  };

  return { reset, fields, onChange, validateComplete };
};
