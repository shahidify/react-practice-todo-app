import React from "react";

class TodoItem extends React.Component {
  itemRef = React.createRef();

  handleDelete = e => {
    e.preventDefault();
    console.log("handle Submit - ", this.itemRef);
  };
  render() {
    return (
      <li
        className=""
        ref={this.itemRef}
        index={this.props.key}
        onDoubleClick={this.handleDelete}
      >
        {this.props.item}
      </li>
    );
  }
}

export default TodoItem;
