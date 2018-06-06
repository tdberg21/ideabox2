import React, { Component } from 'react';
import Card from '../Card/Card.js'

export default class CardContainer extends Component {
  render(props) {
    return (
      <div>
        {this.props.ideasList.map((idea) => {
          return <Card idea={ idea } />
        })}
      </div>  
    )
  }
}