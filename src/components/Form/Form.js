import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: ''
    }
    this.handleInputs = this.handleInputs.bind(this);
    this.sendIdeaToApp = this.sendIdeaToApp.bind(this);
  }

  handleInputs(event) {
    // console.log(event.target.value)
    // let { body, title } = event.target;
    if (event.target.name === 'title') {
      this.setState(
        { title: event.target.value }
      );
    }; 
    if (event.target.name === 'body') {
      this.setState(
        { body: event.target.value }
      );
    };
  };

  sendIdeaToApp() {
    let newIdea = {
      title: this.state.title,
      body: this.state.body
    };
    this.props.saveIdea(newIdea);
    this.setState({
      title: '',
      body: ''
    })
  }


  render() {
    return (
      <div>
        <input 
          type="text" 
          placeholder="Idea Title"
          value= {this.state.title}
          name="title" 
          onChange={this.handleInputs}/>
        <input 
          type="text"
          placeholder="Idea Body"
          value={this.state.body}
          name="body"
          onChange={this.handleInputs}/>
        <button onClick={this.sendIdeaToApp}>Submit Idea</button>
      </div>
    )
  }
}



