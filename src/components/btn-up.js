import React from "react";

let BtnUp = (props) => {
  return <button className="up" onClick={() =>
    {props.moveTaskUp(props.taskNum)}}>Up</button>;
}

export default BtnUp;
