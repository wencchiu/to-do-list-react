import React, {Component} from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    // this.inputEnterKeyup = this.inputEnterKeyup.bind(this);
    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {
      taskText: ""
    }
  }

  submit(e) {
    if (this.currentTaskText.length >= 1) {
        if (e.keyCode === 13) {
          this.props.submit();
        }
      }
  }

  onChange (e) {
    this.currentTaskText = e.target.value;
    this.props.onChange(e.target.value);
  }


  render() {
      return <input type="text" placeholder="Enter a task" id="to-do-input"
        value={this.props.currentTaskText} onChange={this.onChange}
        onKeyUp={this.submit} />
    }
}


export default Input;
