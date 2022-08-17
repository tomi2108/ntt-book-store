/* eslint-disable no-undef */
import { useState } from "react";

export const useLocalStorage = (name,key,type="string",initialValue=null) => {

  const [state,setState] = useState(initialValue);

  const setItem = (item) => {
    setState(item);
    if(type === "object") return localStorage.setItem(name,JSON.stringify(item));
    return localStorage.setItem(name,item);
  };

  const removeItem = () => {
    setState(null);
    return localStorage.removeItem(name);
  };

  const getItem = () => {
    const item = localStorage.getItem(name);
    if (item) {
      if(type === "object"){
        const parsedItem = JSON.parse(item);
        setState(parsedItem);
        return parsedItem;
      }else{
        setState(item);
        return item;
      }
    }
    return null;
  };

  return { [key]:state,[`${key}Storage`]:{ setItem,removeItem,getItem } };
};