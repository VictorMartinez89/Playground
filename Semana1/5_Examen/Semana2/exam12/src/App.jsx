import { useState } from 'react'
import Form from './Form'
import Turnos from './Turnos'
import './App.css'

function App() {
  const [pacientes, setPacientes] = useState([])

  const addPatient = (patient)=>{ // juan perez, rodrigo gonzales - Creamos un estado cuyo valor inicial es un array
    
    setPacientes([...pacientes, patient]) // Laura Gomez
    console.log(pacientes) //
  }



  return (
    <div className='App'>
      <h1>Registro de turnos</h1>
      <Form onAddPatient={addPatient}/>
      <Turnos pacientes={pacientes}/>

    </div>
     )
}

export default App
