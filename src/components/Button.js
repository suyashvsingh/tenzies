import React from "react";
import { useContext } from "react";
import AppContext from "./context";

function Button() {
  const { onClick, over ,count} = useContext(AppContext);

  return (
    <div className="button-area">
      <button className="btn" onClick={onClick}>{`${
        over ? `You Won, you took ${count} attempts🥳 Play Again` : `Roll`
      }`}</button>
    </div>
  );
}

export default Button;
