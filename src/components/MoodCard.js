import React from 'react';
import './MoodCard.css'

  const MoodCard = ({color, name, title}) => {
    return (
      <div className='mood-card' style={{backgroundColor: `${color}`}}>
        <svg>{name}</svg>
        <h2>{title}</h2>
      </div>
    )
  }

export default MoodCard;
