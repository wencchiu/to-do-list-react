import React from "react";

const BtnModify = props => (
  <button onClick={() => props.changeToEditMode(props.taskNum)}>Modify</button>
);

export default BtnModify;
