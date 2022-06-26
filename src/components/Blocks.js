import React, { useContext } from "react";
import Block from "./Block";
import AppContext from "./context";

function Blocks() {
  const { data } = useContext(AppContext);

  const boxes = data.map((box) => {
    return <Block key={box.id} individualData={box} />;
  });

  return <div className="blocks">{boxes}</div>;
}

export default Blocks;
