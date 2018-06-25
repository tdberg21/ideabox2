import React from 'react';
import './Card.css';

const Card = (props) => {

  const deleteCard = () => {
    props.deleteIdea(props.idea.key)
  }

  const increaseQuality = () => {
    props.increaseQuality(props.idea.key)
  }

  const decreaseQuality = () => {
    props.decreaseQuality(props.idea.key)
  }

  return (
    <div>
      <h3>Title: {props.idea.title}</h3>
      <p>Body: {props.idea.body}</p>
      <p className='quality'> Quality: {props.idea.quality}</p>
      <button 
        onClick={deleteCard}
        className='delete-button card-buttons'>Delete</button>
      <button 
        onClick={increaseQuality}
        className='upvote-button card-buttons'> Upvote </button>
      <button 
        onClick= {decreaseQuality}
        className='downvote-button card-buttons'> Downvote </button>
    </div>
  )
}

export default Card;