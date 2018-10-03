import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  render() {
    return (
      <ul className="todo-list">
        {Object.keys(this.props.todos).map(key => (
          <TodoItem key={key} item={this.props.todos[key]} />
        ))}
      </ul>
    );
  }
}

export default TodoList;
