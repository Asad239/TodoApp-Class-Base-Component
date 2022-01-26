import React from "react";
import InputContainer from "./InputContainer";
import TodoList from "./TodoList";
const { v4: uuidv4 } = require("uuid");

class MyTodosApp extends React.Component {
  constructor() {
    super();
    this.state = {
      TodosData: [],
      userTodos: {
        title: "",
        isCompleted: false,
        uuid: "",
      },
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.addTask = this.addTask.bind(this);    
    this.onDeletePressed = this.onDeletePressed.bind(this);
    this.onEditPressed = this.onEditPressed.bind(this);
  }
  onChange(e) {
    console.log("first");
    console.log(e.target.value);
    this.setState({
      userTodos: {
        title: e.target.value,
        isCompleted: false,
        uuid: uuidv4(),
      },
    });
  }
  onSubmit(e) {
    e.preventDefault();
    console.log("onSubmit");
    console.log(this.state.TodosData);
    console.log(e);
  }
  addTask() {
    console.log("addTask");
    const newItem = this.state.userTodos;
    if (newItem.title !== "") {
      const TodosData = [...this.state.TodosData, newItem];
      this.setState({
        TodosData: TodosData,
        userTodos: {
          title: "",
          isCompleted: false,
          uuid: uuidv4(),
        },
      });
    }
  }
  onDeletePressed(todo){
    console.log("Delete pressed", todo);
    const filteredItems= this.state.TodosData.filter(item =>
      item!== todo);
    this.setState({
      TodosData: filteredItems
    })
  }
  onEditPressed(todo){
      
    console.log(todo);
    todo.isCompleted = true;
    //   console.log("Edit pressed",todo.isCompleted=true);
    console.log(todo);
    //   const newTodos = todo;
    //     newTodos[todo.id].isCompleted = true;
    //   setTodosData(newTodos);
    //   setTodosData(todo.isCompleted=true)
  }
  render() {
    return (
      <>
        <h1>My Todos App</h1>
        <InputContainer
          onChange={this.onChange}
          userInput={this.state.userTodos.title}
          onSubmit={this.onSubmit}
          onClick={this.addTask}
        />
        <TodoList
          TodosData={this.state.TodosData}
          onDeletePressed={this.onDeletePressed}
          onEditPressed={this.onEditPressed}
        />
      </>
    );
  }
}
export default MyTodosApp;
