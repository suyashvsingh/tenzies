import React from "react";
import { useContext } from "react";
import AppContext from "./context";

function Button() {
  const { onClick, over } = useContext(AppContext);

  return (
    <div className="button-area">
      <button className="btn" onClick={onClick}>{`${
        over ? `You Won 🥳 Play Again` : `Roll`
      }`}</button>
    </div>
  );
}

export default Button;
