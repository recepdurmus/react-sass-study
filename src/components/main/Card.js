import React from 'react'

const Card = ({item}) => {

    const {title, id, desc, image} = item



  return (
    <div className='card'>
        <h1>{title}</h1>
        <img src={image} alt="" />
        <p>{desc}</p>
    </div>
  )
}

export default Card