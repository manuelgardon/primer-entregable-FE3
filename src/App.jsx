import { useState } from 'react'
import './App.css'
import Form from './Components/Form'
import Card from './Components/Card'

function App() {

  const [name, setName] = useState('')

  const [model, setCarModel] = useState('')

  const [show, setShow] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.length > 3) {
      setShow(true)
    }
  }

  return (
    <>
    
      <Form setName={setName} setCarModel={setCarModel} handleSubmit={handleSubmit} />
      
      {show && <Card name={name} model={model} />}
    
    </>
  )
}

export default App
