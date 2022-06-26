import React from "react";
import Block from "./Block";

function Blocks({ data, toggle }) {
  const boxes = data.map((box) => {
    return <Block key={box.id} individualData={box} toggle={toggle} />;
  });

  return <div className="blocks">{boxes}</div>;
}

export default Blocks;
