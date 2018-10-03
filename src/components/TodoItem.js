import React from "react";

class TodoItem extends React.Component {
  itemRef = React.createRef();

  render() {
    return (
      <li className="" ref={this.itemRef} onDoubleClick={this.handleDelete}>
        {this.props.item}
        <div className="view">
          <button
            className="destroy"
            onClick={() => this.props.deleteItem(this.props.index)}
          />
        </div>
      </li>
    );
  }
}

export default TodoItem;
