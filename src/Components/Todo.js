import React from "react";
class Todo extends React.Component{
    componentWillUnmount(){
        alert('Task has been deleted')
    }
    
    render(){
        return(
            <div>
                <p style={{ textDecoration: this.props.todo.isCompleted ? "line-through" : "" }}>{this.props.taskInput}</p>
                <button onClick={()=>{this.props.onDeletePressed(this.props.todo)}}>Delete</button>
                <button onClick={()=>{this.props.onEditPressed(this.props.todo)}}>Edit</button>
            </div>
        )
    }
}
export default Todo