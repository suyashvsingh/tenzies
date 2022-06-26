import React, { useContext } from "react";
import AppContext from "./context";

function Block({ individualData }) {
  const { toggle } = useContext(AppContext);

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
