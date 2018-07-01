import React, { Component } from "react";
import FormSubmit from "./Components/FormSubmit";
import HeaderComponent from "./Components/HeaderComponent";
import List from "./Components/List";
import ListItems from './Components/ListItems';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    todos: [
      { id: 1, name: "Shopping", complete: false },
      { id: 2, name: "Swimming", complete: false }
    ],
    message: ""
    };

    this.onChangMessage = this.onChangMessage.bind(this);
    this.onSubmitMessage = this.onSubmitMessage.bind(this);

  }
  
  onChangMessage(e){
    this.setState({message: e.target.value});
  }

  onSubmitMessage(e){
    //ป้องกันการเปลี่ยนหน้า
    e.preventDefault();
    let oldTodos = this.state.todos;
    let todoLenght = this.state.todos.length;
    let lastId = this.state.todos[todoLenght - 1].id;
    let newMessage = { id: lastId + 1, name: this.state.message, complete: false };
    oldTodos.push(newMessage);
    this.setState({ todos: oldTodos });
  }

  render() {
    return (
      <div
        style={{
          borderColor: "#e12c6a",
          borderWidth: 2,
          borderStyle: "solid",
          borderRadius: 4,
          width: 1024,
          margin: "auto",
          marginTop: 20
        }}
      >
        <HeaderComponent />
        <List todos={this.state.todos}>
          <ListItems />
          </List>
        <FormSubmit onChangMessage={this.onChangMessage}
                    onSubmitMessage={this.onSubmitMessage} />
      </div>
    );
  }
}

export default App;
