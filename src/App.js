import React , {Component} from 'react';
import InputContainer from "./components/input-container";
import ListContainer from "./components/list-container";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskNum: 0,
      newTask: "",
    }
    this.getInputTask = this.getInputTask.bind(this);
  }


  getInputTask(inputTask) {
    this.setState({
      taskNum: this.state.taskNum + 1,
      newTask: inputTask
    })
  }

  render(){
    return (
      <div>
        <InputContainer newTask={this.getInputTask} />
        <ListContainer newTask={this.state.newTask} taskNum={this.state.taskNum}/>
      </div>

    )
  }

}



export default App;
