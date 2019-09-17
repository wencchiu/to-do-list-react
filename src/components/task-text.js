import React, {Component} from "react";

class TaskText extends Component {
  constructor(props) {
    super(props);
    this.currentTaskText = props.taskContent;
    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  onChange (e) {
    this.props.onChange(e.target.value);
    this.currentTaskText = e.target.value.trim();
  }

  submit (e) {
    if (this.currentTaskText.length >= 1) {
        if (e.keyCode === 13) {
          this.props.submit();
        }
      }
  }

  render () {
    return (this.props.taskInEdit?
     <input value={this.props.taskContent}
     onChange={this.onChange} onKeyUp={this.submit} />
    : <p>{this.props.taskContent}</p>)
    }

}

export default TaskText;
