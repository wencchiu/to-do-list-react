import React from "react";

let BtnModify = (props) => {
  return <button className="modify"
  onClick={() =>
    {props.changeToEditMode(props.taskNum)}}>Modify</button>;
}

export default BtnModify;
