import React from 'react'

const Card = ({ name, model }) => {
  return (
    <div className='card'>
      <h1>Conductor: {name} </h1>
      <p>Modelo de auto: {model}</p>
    </div>
  )
}

export default Card