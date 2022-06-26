import React from "react";

function Button({ onClick, over }) {
  return (
    <div className="button-area">
      <button className="btn" onClick={onClick}>{`${
        over ? `You Won 🥳 Play Again` : `Roll`
      }`}</button>
    </div>
  );
}

export default Button;
