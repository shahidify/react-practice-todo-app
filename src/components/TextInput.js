import React from "react";

class TextInput extends React.Component {
  itemRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    if (e.which === 13) {
      const listItem = this.itemRef.current.value;
      this.props.addItem(listItem);
      e.target.value = "";
    }
  };
  render() {
    return (
      <input
        type="text"
        ref={this.itemRef}
        name="item"
        className="new-todo"
        onKeyUp={this.handleSubmit}
        placeholder="What needs to be done? "
      />
    );
  }
}

export default TextInput;
