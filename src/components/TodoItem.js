import React from "react";
import { connect } from "react-redux";
import { removeTask } from "../actions";
function TodoItem(props) {
  return (
    <div className="TodoItem">
      <p>{props.text}</p>
      <button onClick={() => props.removeTask(props.id)}>Delete</button>
    </div>
  );
}

export default connect(
  null,
  { removeTask }
)(TodoItem);
