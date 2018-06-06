import React from 'react';

const Card = (props) => {
  return (
    <div>
      <h3>Title: {props.idea.title}</h3>
      <p>Body: {props.idea.body}</p>
      <button>Delete</button>
    </div>
  )
}

export default Card;