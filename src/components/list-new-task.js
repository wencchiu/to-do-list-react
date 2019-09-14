import React from "react";
import BtnUp from "./btn-up"
import BtnDown from "./btn-down";
import BtnModify from "./btn-modify"
import BtnDelete from "./btn-delete";
import TaskText from "./task-text"

let NewTask = (props) => {
    return (
      <li>
        <TaskText newTask={props.newTask}/>
        <BtnUp />
        <BtnDown />
        <BtnModify />
        <BtnDelete deleteClicked={props.deleteClicked} />
      </li>
    );
}

export default NewTask;
