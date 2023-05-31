import React from 'react'

const Form = ({ setName, setCarModel, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>

      <label> Ingresa tu nombre </label>
      <input type="text" onBlur={(e) => setName((prevState) => ({...prevState, name: e.target.value}))}/>

      <label> Modelo de auto </label>
      <input type="text" onBlur={(e) => setCarModel((prevState) => ({...prevState, model: e.target.value}))}/>
  
      <button>Enviar</button>

    </form>
  )
}

export default Form