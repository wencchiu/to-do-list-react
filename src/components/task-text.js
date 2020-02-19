import React, { Component } from "react";
import styled, { css } from "styled-components";

const style = css`
  display: flex;
  align-items: center;
  width: 50%;
  padding-left: 20px;
  font-size: 22px;
`;

const Text = styled.p`
  ${style}
`;

const Input = styled.input`
  ${style};
  line-height: 30px;
  outline: none;
`;

class TaskText extends Component {
  constructor(props) {
    super(props);
    this.currentTaskText = props.taskContent;
    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  onChange(e) {
    this.props.onChange(e.target.value);
    this.currentTaskText = e.target.value.trim();
  }

  submit(e) {
    if (this.currentTaskText.length >= 1) {
      if (e.keyCode === 13) {
        this.props.submit();
      }
    }
  }

  render() {
    return this.props.taskInEdit ? (
      <Input
        value={this.props.taskContent}
        onChange={this.onChange}
        onKeyUp={this.submit}
      />
    ) : (
      <Text>{this.props.taskContent}</Text>
    );
  }
}

export default TaskText;
