import React, {Component} from "react";
import NewTask from "./list-new-task";

class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    }
    this.deleteClicked = this.deleteClicked.bind(this);
  }

  deleteClicked(clicked) {
    this.state.tasks.splice()
  }

  render() {
    if (this.props.taskNum !== 0) {
      this.state.tasks.push(<NewTask newTask={this.props.newTask}
        key={this.props.taskNum} deleteClicked={this.deleteClicked} />)
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
