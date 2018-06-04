import React, { Component } from 'react';
import './App.css';
import Idea from './Idea.js'

class App extends Component {
  constructor() {
    super();
    this.updateState = this.updateTitle.bind(this);

    this.state = {
      title: '',
      body: ''
    };
  };

  updateTitle(event) {
    this.setState({title: event.target.value});
  }

  updateBody(event) {
    this.setState({body: event.target.value})
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
          <input type="text" placeholder="Idea Body" onChange={(event) => this.updateBody(event)}></input>
        </header>
        <Idea title={this.state.title} body={this.state.body}/>
      </div>
    );
  }
}

export default App;
