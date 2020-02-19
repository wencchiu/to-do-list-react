import React from "react";

const BtnUp = props => (
  <button onClick={() => props.moveTaskUp(props.taskNum)}>Up</button>
);

export default BtnUp;
