import { useState } from 'react'
import './App.css'
import Form from './Components/Form'
import Card from './Components/Card'

function App() {

  const [name, setName] = useState('')

  const [model, setCarModel] = useState('')

  const [show, setShow] = useState(false)

  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.length > 2 && model.length > 5 && name[0] !== " ") {
      setShow(true)
    } else setError(true)
  }

  return (
    <>
    
      <Form setName={setName} setCarModel={setCarModel} handleSubmit={handleSubmit} />
      
      {show && <Card name={name} model={model} /> }

      {error && <div style={{color: 'red'}}>Por favor chequea que la información sea correcta.</div>}
    
    </>
  )
}

export default App
