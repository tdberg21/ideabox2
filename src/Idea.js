import React, { Component } from 'react';

export default class Idea extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        {this.props.ideas.map((idea, index) => {
          return (
            <div>
              <h2>{idea.title}</h2>
              <p>{idea.body}</p>
            </div>
        )})}
      </div>
    )
  }
}