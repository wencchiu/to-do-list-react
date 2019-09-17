import React from "react";

let BtnDown = (props) => {
  return <button className="down" onClick={() =>
    {props.moveTaskDown(props.taskNum)}}>Down</button>;
}

export default BtnDown;
