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

  deleteIdea = (key) => {
    let filteredIdeas = this.state.ideas.filter(idea => {
      return (idea.key !== key)
    })
    this.setState({
      ideas: filteredIdeas})
  }

  increaseQuality = (key) => {
    let ideaToIncrease = this.state.ideas.filter(idea => (idea.key === key));
    if (ideaToIncrease[0].quality === 'swill') {
      ideaToIncrease[0].quality = 'plausible';
    } else if (ideaToIncrease[0].quality === 'plausible') {
      ideaToIncrease[0].quality = 'genius';
    }
    this.setState({
      ideas: [...this.state.ideas]
    })
  }

  decreaseQuality = (key) => {
    let ideaToDecrease = this.state.ideas.filter(idea => idea.key === key);

    if (ideaToDecrease[0].quality === 'genius') {
      ideaToDecrease[0].quality = 'plausible';
    } else if (ideaToDecrease[0].quality === 'plausible') {
      ideaToDecrease[0].quality = 'swill';      
    }
    this.setState({
      ideas: [...this.state.ideas]
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
        </header>
        <Form saveIdea= {this.saveIdea}/>
        <CardContainer 
          ideasList= {this.state.ideas}
          deleteIdea= {this.deleteIdea}
          increaseQuality= {this.increaseQuality}
          decreaseQuality= {this.decreaseQuality}/>
      </div>
    );
  }
}

export default App;
