import React from "react";

class InputContainer extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input
          type="text"
          value={this.props.userInput}
          onChange={this.props.onChange}
        />
        <button onClick={this.props.onClick}>+</button>
      </form>
    );
  }
}
export default InputContainer;
