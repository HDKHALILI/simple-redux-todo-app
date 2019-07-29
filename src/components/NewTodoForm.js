import React, { Component } from "react";
import { connect } from "react-redux";
import uuid from "uuid/v4";

import { addTask } from "../actions";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ task: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addTask({
      id: uuid(),
      text: this.state.task
    });
    this.setState({ task: "" });
  }

  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <input value={this.state.task} onChange={this.handleChange} />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default connect(
  null,
  { addTask }
)(NewTodoForm);
