import React, { Component } from 'react';

export default class Idea extends Component {
  constructor() {
    super();
    this.addIdea = this.addIdea.bind(this);
    this.state = {
      title: '',
      bodie: ''
    }
  }

  addIdea() {
    this.setState({
      title: this.props.title,
      body: this.props.body
    })
  }

  render() {
    return(
      <div>
        <button onClick={this.addIdea}>Submit Idea</button>
        <h2> {this.state.title} </h2>
        <p> {this.state.body}</p>
      </div>
    )
  }
}