import React from "react";

function Block({ individualData, toggle }) {
  return (
    <div
      className={`block ${individualData.on ? `block--green` : ""} `}
      onClick={() => toggle(individualData.id)}
    >
      {individualData.number}
    </div>
  );
}

export default Block;
