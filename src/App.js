import React, { Component } from "react";
import InputContainer from "./components/input-container";
import ListContainer from "./components/list-container";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskNumAndTasks: []
    };
    this.addInputTask = this.addInputTask.bind(this);
    this.editTaskContent = this.editTaskContent.bind(this);
    this.deleteClicked = this.deleteClicked.bind(this);
    this.moveTaskUp = this.moveTaskUp.bind(this);
    this.moveTaskDown = this.moveTaskDown.bind(this);
    this.taskNum = 0;
  }

  addInputTask(inputTask) {
    this.taskNum += 1;
    this.state.taskNumAndTasks.push({
      taskNum: this.taskNum,
      taskContent: inputTask.trim()
    });
    this.setState({
      taskNumAndTasks: this.state.taskNumAndTasks
    });
  }

  editTaskContent(taskNum, content) {
    let taskNumArr = this.state.taskNumAndTasks.map(e => e.taskNum);
    let index = taskNumArr.indexOf(taskNum);
    this.state.taskNumAndTasks.splice(index, 1, {
      taskNum: taskNum,
      taskContent: content.trim()
    });
    this.setState({
      taskNumAndTasks: this.state.taskNumAndTasks
    });
  }

  deleteClicked(taskNum) {
    let taskNumArr = this.state.taskNumAndTasks.map(e => e.taskNum);
    let index = taskNumArr.indexOf(taskNum);
    this.state.taskNumAndTasks.splice(index, 1);
    this.setState({
      taskNumAndTasks: this.state.taskNumAndTasks
    });
  }

  moveTaskUp(taskNum) {
    let taskNumArr = this.state.taskNumAndTasks.map(e => e.taskNum);
    let index = taskNumArr.indexOf(taskNum);
    let temp = this.state.taskNumAndTasks[index];
    if (index > 0) {
      this.state.taskNumAndTasks.splice(
        index - 1,
        2,
        temp,
        this.state.taskNumAndTasks[index - 1]
      );
      this.setState({
        taskNumAndTasks: this.state.taskNumAndTasks
      });
    }
  }

  moveTaskDown(taskNum) {
    let taskNumArr = this.state.taskNumAndTasks.map(e => e.taskNum);
    let index = taskNumArr.indexOf(taskNum);
    let temp = this.state.taskNumAndTasks[index];
    if (index < taskNumArr.length - 1) {
      this.state.taskNumAndTasks.splice(
        index,
        2,
        this.state.taskNumAndTasks[index + 1],
        temp
      );
      this.setState({
        taskNumAndTasks: this.state.taskNumAndTasks
      });
    }
  }

  render() {
    return (
      <div>
        <InputContainer addInputTask={this.addInputTask} />
        <ListContainer
          taskNumAndTasks={this.state.taskNumAndTasks}
          deleteClicked={this.deleteClicked}
          modifyClicked={this.modifyClicked}
          editTaskContent={this.editTaskContent}
          moveTaskUp={this.moveTaskUp}
          moveTaskDown={this.moveTaskDown}
        />
      </div>
    );
  }
}

export default App;
