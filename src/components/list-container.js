import React, {Component} from "react";
import NewTask from "./list-new-task";

class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      arrTaskNum: []
    }
    this.deleteClicked = this.deleteClicked.bind(this);
    this.newTaskRender = this.newTaskRender.bind(this);
  }

  deleteClicked(taskNum) {
    let index = this.state.arrTaskNum.indexOf(taskNum);
    this.state.tasks.splice(index, 1)
    this.setState({
      tasks: this.state.tasks
    })
    this.state.arrTaskNum.splice(index, 1)
  }

  newTaskRender () {
    if (this.props.taskNum !== 0) {
      this.state.tasks.push(<NewTask newTask={this.props.newTask.trim()}
        key={this.props.taskNum} deleteClicked={this.deleteClicked}
        taskNum={this.props.taskNum} />)
      this.state.arrTaskNum.push(this.props.taskNum);
      this.setState({
        previousTaskNum: this.props.taskNum
      })

    }
  }

  render() {
    let taskCompare = this.props.taskNum === this.state.previousTaskNum
    if (!taskCompare) {
      this.newTaskRender ()
    }

    return (
      <div className="to-do-list-container" id="list-container">
        <ul className="to-do-list" id="to-do-list">
          {this.state.tasks}
        </ul>
      </div>
    )
  }
}

export default ListContainer;
