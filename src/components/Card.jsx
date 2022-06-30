import React from 'react'

const Card = ({title, imgUrl}) => {
  return (
    <div className='_card'>
        <img src={imgUrl} alt="" />
        <h3 className="card_title">{title}</h3>
    </div>
  )
}

export default Card