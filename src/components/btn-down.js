import React from "react";

const BtnDown = props => (
  <button onClick={() => props.moveTaskDown(props.taskNum)}>Down</button>
);

export default BtnDown;
