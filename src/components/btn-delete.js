import React from "react";

const BtnDelete = props => (
  <button onClick={() => props.deleteClicked(props.taskNum)}>Delete</button>
);

export default BtnDelete;
