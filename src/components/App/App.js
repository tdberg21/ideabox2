import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form.js';
import CardContainer from '../CardContainer/CardContainer.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: []
    };
    this.saveIdea = this.saveIdea.bind(this);
  };

  saveIdea(idea) {
    this.setState({
      ideas: [idea, ...this.state.ideas ]
    })
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Ideabox</h1>
          <p className="App-intro">
          Tell me about your ideas...
          </p>
        </header>
        <Form saveIdea= {this.saveIdea}/>
        <CardContainer ideasList={this.state.ideas}/>
      </div>
    );
  }
}

export default App;
