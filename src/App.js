import React, { Component } from 'react';
import './App.css';
import Idea from './Idea.js'

class App extends Component {
  constructor() {
    super();
    this.updateState = this.updateTitle.bind(this);

    this.state = {
      title: '',
      toDos: []
    };
  };

  updateTitle(event) {
    this.setState({title: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Ideabox</h1>
          <p className="App-intro">
          Tell me about your ideas...
          </p>
          <input type="text" placeholder="Idea Title" onChange={(event) => this.updateTitle(event)}></input>
          <input type="text" placeholder="Idea Body"></input>
          <button> Submit Idea </button>
        </header>
        <Idea />
      </div>
    );
  }
}

export default App;
