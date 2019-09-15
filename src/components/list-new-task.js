import React, {Component} from "react";
import BtnUp from "./btn-up"
import BtnDown from "./btn-down";
import BtnModify from "./btn-modify"
import BtnDelete from "./btn-delete";
import TaskText from "./task-text"

class NewTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskNum: this.props.taskNum
    }
  }

  render () {
    return (
      <li>
        <TaskText newTask={this.props.newTask}/>
        <BtnUp />
        <BtnDown />
        <BtnModify />
        <BtnDelete deleteClicked={this.props.deleteClicked} taskNum={this.state.taskNum} />
      </li>
    );
  }
}

export default NewTask;
