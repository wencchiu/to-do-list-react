import React, { Component } from "react";
import styled from "styled-components";
import Input from "./input";
import InputBtn from "./input-btn";

const Wrapper = styled.div`
  width: 90%;
  min-width: 800px;
  max-width: 1400px;
  margin: 30px auto 0;
  background-color: #3d3b71;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    min-width: 300px;
  }
`;

const Title = styled.h1`
  padding: 30px;
  text-align: center;
  font-size: 70px;
  color: #fff;

  @media (max-width: 1024px) {
    font-size: 48px;
  }

  @media (max-width: 768px) {
    font-size: 40px;
    padding: 20px;
  }
`;

const InputBox = styled.div`
  width: 70%;
  padding: 20px 0 50px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 10px 0 30px;
  }
`;

class InputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTaskText: ""
    };
    this.submitNewTask = this.submitNewTask.bind(this);
    this.setCurrentTaskText = this.setCurrentTaskText.bind(this);
  }

  setCurrentTaskText(text) {
    this.setState({ currentTaskText: text });
  }

  submitNewTask() {
    this.setState({ currentTaskText: "" });
    this.props.addInputTask(this.state.currentTaskText);
  }

  render() {
    return (
      <Wrapper>
        <Title>To-do List</Title>
        <InputBox>
          <Input
            onChange={this.setCurrentTaskText}
            currentTaskText={this.state.currentTaskText}
            submit={this.submitNewTask}
          />
          <InputBtn onClick={this.submitNewTask} />
        </InputBox>
      </Wrapper>
    );
  }
}

export default InputContainer;
