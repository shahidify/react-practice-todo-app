import React from "react";
import TextInput from "./TextInput";
import TodoList from "./TodoList";

class App extends React.Component {
  state = {
    todos: {}
  };
  addItem = item => {
    // 1. Take a copy of the existing state
    const todos = { ...this.state.todos };
    // 2. Add new todo to the todos list
    todos[`${Date.now()}`] = item;
    // 3. Set the new todos object to State
    this.setState({ todos });
  };

  deleteItem = item => {
    console.log("delete item : ", item);
    const todos = { ...this.state.todos };
    delete todos[item];
    this.setState({ todos });
  };

  render() {
    return (
      <div className="todoapp">
        <div className="header">
          <h1>To Do</h1>
          <TextInput addItem={this.addItem} />
          <section className="main">
            <TodoList todos={this.state.todos} deleteItem={this.deleteItem} />
          </section>
        </div>
      </div>
    );
  }
}
export default App;
