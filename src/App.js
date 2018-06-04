import React, { Component } from 'react';
import './App.css';
import Idea from './Idea.js'

class App extends Component {
  constructor() {
    super();
    this.updateState = this.updateTitle.bind(this);

    this.state = {
      title: '',
      body: '',
      ideas: []
    };
  };

  updateTitle(event) {
    this.setState({title: event.target.value});
  }

  updateBody(event) {
    this.setState({body: event.target.value})
  }

  submitIdea() {
    let idea = {
      title: this.state.title,
      body: this.state.body
    }
    this.setState({
      title: '',
      body: '',
      ideas: [...this.state.ideas, idea]
    })
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
          <button onClick={() => this.submitIdea()}>Submit Idea</button>
        </header>
        <Idea ideas={this.state.ideas}/>
      </div>
    );
  }
}

export default App;
