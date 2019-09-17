import React, {Component} from "react";
import Input from "./input";
import InputBtn from "./input-btn";

class InputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTaskText: ""
    }
    this.submitNewTask = this.submitNewTask.bind(this);
    this.setCurrentTaskText = this.setCurrentTaskText.bind(this);
  }

  setCurrentTaskText (text) {
    this.setState({currentTaskText: text});
  }

  submitNewTask () {
    this.setState({currentTaskText: ''});
    this.props.addInputTask(this.state.currentTaskText);
  }

  render() {
    return (
      <div className="title-input-container">
        <h1 className="title">To-do List</h1>
        <Input onChange={this.setCurrentTaskText}
        currentTaskText={this.state.currentTaskText}
          submit={this.submitNewTask} />
        <InputBtn onClick={this.submitNewTask} />
      </div>
    )
  }
}

export default InputContainer;
