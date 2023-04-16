import React from "react";
import Comp2 from "./Comp2";

const Comp1 = (props) => {
  return (
    <>
      <div>Comp1</div>
      <Comp2 data={props.data}/>
    </>
  );
};

export default Comp1;
