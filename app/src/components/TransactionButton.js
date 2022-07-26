import React, { useState } from "react";
import { Button } from "react-bootstrap";
import CrossIcon from "../static/CrossIcon.js";
import TickIcon from "../static/TickIcon.js";
import "../styles/transactionButton.css";


const BUTTON_STATE = {
  loading: 0,
  ready: 1,
  error: 2,
  completed: 3,
};


const TransactionButton = ({ onClick, defaultText, completedText, errorText, disabled }) => {
  const [state, setState] = useState(BUTTON_STATE.ready);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setState(BUTTON_STATE.loading);
    onClick().then(() => {
      setState(BUTTON_STATE.completed);
      setTimeout(() => {
        setState(BUTTON_STATE.ready);
        setLoading(false);
      }, 2000);
    })
      .catch(() => {
        setState(BUTTON_STATE.error);
        setTimeout(() => {
          setState(BUTTON_STATE.ready);
          setLoading(false);
        }, 2000);
      });
  };

  return (
    <Button disabled={loading || disabled} variant={
      state === BUTTON_STATE.completed ? "success" :
        state === BUTTON_STATE.error ? "danger" : "primary"
    } onClick={handleClick}>
      <span
        className={
          state === BUTTON_STATE.loading
            ? "loader"
            : state === BUTTON_STATE.completed
              ? "completed"
              : ""
        }
      >
        {state === BUTTON_STATE.error && <CrossIcon/>}
        {
          state === BUTTON_STATE.loading ? "" :
            state === BUTTON_STATE.completed ? completedText :
              state === BUTTON_STATE.error ? errorText : defaultText
        }
      </span>
      {state === BUTTON_STATE.completed && <TickIcon/>}
    </Button>
  );
};

export default TransactionButton;