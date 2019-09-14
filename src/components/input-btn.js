import React, {Component} from "react";

class InputBtn extends Component {
  constructor(props) {
    super(props);
    this.inputBtnClicked = this.inputBtnClicked.bind(this);
  }

  render() {
    return <button id="input-btn"
    onClick={this.props.onClick}>ADD</button>;
  }
}



export default InputBtn;
