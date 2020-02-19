import React, { Component } from "react";
import styled from "styled-components";
import BtnUp from "./btn-up";
import BtnDown from "./btn-down";
import BtnModify from "./btn-modify";
import BtnDelete from "./btn-delete";
import TaskText from "./task-text";

const Li = styled.li`
  list-style-type: none;
  line-height: 60px;
  padding: 6px 0;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    line-height: 50px;
  }

  &:nth-child(odd) {
    background-color: #fcf7de;
  }

  &:nth-child(even) {
    background-color: #f6f5f8;
  }
`;

const ButtonWrapper = styled.div`
  line-height: 0;
  margin-right: 2%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 120px;
  }
`;

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskInEdit: false,
      currentContent: this.props.taskContent
    };
    this.changeToEditMode = this.changeToEditMode.bind(this);
    this.setEditingTaskContent = this.setEditingTaskContent.bind(this);
    this.exitEditMode = this.exitEditMode.bind(this);
  }

  changeToEditMode(taskNum) {
    this.setState({ taskInEdit: true });
  }

  setEditingTaskContent(content) {
    this.setState({ currentContent: content });
  }

  exitEditMode() {
    this.setState({ taskInEdit: false });
    this.props.editTaskContent(this.props.taskNum, this.state.currentContent);
  }

  render() {
    return (
      <Li>
        <TaskText
          taskContent={this.state.currentContent}
          taskInEdit={this.state.taskInEdit}
          onChange={this.setEditingTaskContent}
          submit={this.exitEditMode}
        />
        <ButtonWrapper>
          <BtnUp
            moveTaskUp={this.props.moveTaskUp}
            taskNum={this.props.taskNum}
          />
          <BtnDown
            moveTaskDown={this.props.moveTaskDown}
            taskNum={this.props.taskNum}
          />
          <BtnModify
            changeToEditMode={this.changeToEditMode}
            taskNum={this.props.taskNum}
          />
          <BtnDelete
            deleteClicked={this.props.deleteClicked}
            taskNum={this.props.taskNum}
          />
        </ButtonWrapper>
      </Li>
    );
  }
}

export default Task;
