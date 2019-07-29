import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { createStore } from "redux";

import TodoList from "./TodoList";
import NewTodoForm from "./NewTodoForm";
import reducer from "../reducers";

function App() {
  return (
    <Provider store={createStore(reducer)}>
      <div className="App">
        <NewTodoForm />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
