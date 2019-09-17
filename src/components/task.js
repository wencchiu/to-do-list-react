import React, {Component} from "react";
import BtnUp from "./btn-up"
import BtnDown from "./btn-down";
import BtnModify from "./btn-modify"
import BtnDelete from "./btn-delete";
import TaskText from "./task-text"

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskInEdit: false,
      currentContent: this.props.taskContent,
    }
    this.changeToEditMode = this.changeToEditMode.bind(this);
    this.setEditingTaskContent = this.setEditingTaskContent.bind(this);
    this.exitEditMode = this.exitEditMode.bind(this);
  }

  changeToEditMode(taskNum) {
    this.setState({taskInEdit: true})
  }

  setEditingTaskContent (content) {
    this.setState({currentContent: content})
  }

  exitEditMode () {
    this.setState({taskInEdit: false})
    this.props.editTaskContent(this.props.taskNum, this.state.currentContent);
  }

  render () {
    return (
      <li>
        <TaskText taskContent={this.state.currentContent}
          taskInEdit={this.state.taskInEdit}
          onChange={this.setEditingTaskContent}
          submit={this.exitEditMode} />
        <BtnUp moveTaskUp={this.props.moveTaskUp} taskNum={this.props.taskNum} />
        <BtnDown moveTaskDown={this.props.moveTaskDown} taskNum={this.props.taskNum} />
        <BtnModify changeToEditMode={this.changeToEditMode} taskNum={this.props.taskNum} />
        <BtnDelete deleteClicked={this.props.deleteClicked} taskNum={this.props.taskNum} />
      </li>
    );
  }
}

export default Task;
