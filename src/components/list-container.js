import React, {Component} from "react";
import Task from "./task";

class ListContainer extends Component {
  constructor(props) {
    super(props);

  }
  //
  // modifyClicked (taskNum) {
  //   console.log(taskNum);
  //   this.setState((state, props) => {
  //     return {taskInEdit: !(state.taskInEdit)}
  //   })
  // }

  // deleteClicked(taskNum) {
  //   let index = this.state.arrTaskNum.indexOf(taskNum);
  //   this.state.tasks.splice(index, 1)
  //   this.setState({
  //     tasks: this.state.tasks
  //   })
  //   this.state.arrTaskNum.splice(index, 1)
  // }

//  newTaskRender () {
  //  if (this.props.taskNum !== 0) {
  //    this.state.tasks.push(<Task newTask={this.props.newTask.trim()}
  //      key={this.props.taskNum} deleteClicked={this.deleteClicked}
  //      taskNum={this.props.taskNum} modifyClicked={this.modifyClicked}
  //      taskInEdit={this.state.taskInEdit} />)
  //    this.state.arrTaskNum.push(this.props.taskNum);
  //    this.setState({
  //      previousTaskNum: this.props.taskNum
  //     })
  //
  //   }
  // }



  render() {
    var taskList = this.props.taskNumAndTasks.map((task) =>
      <Task taskContent={task.taskContent} key={task.taskNum}
      taskNum={task.taskNum} modifyClicked={this.props.modifyClicked}
      deleteClicked={this.props.deleteClicked}
      editTaskContent={this.props.editTaskContent}
      moveTaskUp={this.props.moveTaskUp} moveTaskDown={this.props.moveTaskDown} />
    )
    return (
      <div className="to-do-list-container" id="list-container">
        <ul className="to-do-list" id="to-do-list">
          {taskList}
        </ul>
      </div>
    )
  }
}

export default ListContainer;
