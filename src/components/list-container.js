import React, { Component } from "react";
import styled from "styled-components";
import Task from "./task";

const Wrapper = styled.div`
  width: 90%;
  min-width: 800px;
  max-width: 1400px;
  margin: auto;

  @media (max-width: 1024px) {
    min-width: 300px;
  }

  & > p {
    text-align: center;
    font-size: 60px;
    padding: 20px;
    background-color: #ececec;
  }
`;

const List = styled.ul`
  button {
    border: none;
    height: 35px;
    width: 55px;
    color: #58564f;
    margin: 10px;
    font-weight: bold;
    cursor: pointer;

    @media (max-width: 1024px) {
      font-size: 12px;
      margin: 5px;
      width: 48px;
    }
  }
`;

class ListContainer extends Component {
  render() {
    var taskList = this.props.taskNumAndTasks.map(task => (
      <Task
        taskContent={task.taskContent}
        key={task.taskNum}
        taskNum={task.taskNum}
        modifyClicked={this.props.modifyClicked}
        deleteClicked={this.props.deleteClicked}
        editTaskContent={this.props.editTaskContent}
        moveTaskUp={this.props.moveTaskUp}
        moveTaskDown={this.props.moveTaskDown}
      />
    ));
    return (
      <Wrapper>
        <List>{taskList}</List>
      </Wrapper>
    );
  }
}

export default ListContainer;
