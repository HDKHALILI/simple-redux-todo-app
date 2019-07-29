import React, { Component } from "react";
import { connect } from "react-redux";

import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    return (
      <div className="TodoList">
        <div>
          <h1 className="TodoList-title">Todo List</h1>
        </div>
        <div className="TodoList-body">
          {this.props.todos.map(task => (
            <TodoItem text={task.text} id={task.id} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state
  };
};

export default connect(mapStateToProps)(TodoList);
