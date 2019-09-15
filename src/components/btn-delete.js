import React from "react";

let BtnDelete = (props) => {
  return <button className="delete"
  onClick={() =>
    {props.deleteClicked(props.taskNum)}}>Delete</button>;
}

export default BtnDelete;
