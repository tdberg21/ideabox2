import React from 'react';
import Card from '../Card/Card.js'

const CardContainer = ({ ideasList, deleteIdea, increaseQuality, decreaseQuality }) => {
  const cardArray = ideasList.map((idea, index) => {
    return <Card
      idea= {idea}
      key= {idea.key}
      id= {index + idea.title}
      quality= {idea.quality}
      deleteIdea= {deleteIdea}
      increaseQuality= {increaseQuality}
      decreaseQuality= {decreaseQuality} />
  })
  return (
    <div>
      {cardArray}
    </div>  
  )
}

export default CardContainer;