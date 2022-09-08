import React, { Component } from 'react';
import TodoApp from "./components/todo/TodoApp";
import './App.css';
import './bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoApp />
        {/* The Todo Application */}
        {/* <Counter /> */}
      </div>
    );
  }
}

export default App;