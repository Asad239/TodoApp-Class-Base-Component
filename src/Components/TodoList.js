import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <h1>ToDo List</h1>
        {this.props.TodosData.map((todo) => (
          <Todo
            key={todo.uuid}
            todo={todo}
            taskInput={todo.title}
            onDeletePressed={this.props.onDeletePressed}
            onEditPressed={this.props.onEditPressed}
          />
        ))}
      </div>
    );
  }
}
export default TodoList;
