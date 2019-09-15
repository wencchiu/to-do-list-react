import React, {Component} from "react";

class BtnDelete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskNum: this.props.taskNum
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick (e) {
    this.props.deleteClicked(this.state.taskNum)
  }

  render () {
    return <button className="delete"
    onClick={this.onClick}>Delete</button>;
  }
}

export default BtnDelete;
