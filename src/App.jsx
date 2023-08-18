import { useState } from 'react'
import Turnos from './Turnos'

import Card from './Card'

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const[pacientes, setPacientes]= useState([]) 

  const addPatient= (patient)=> { 

    setPacientes([...pacientes, patient])
    console.log(pacientes)
  
  }

  return (
    <div className="App">
      <h1>Encuesta del Perro!!!</h1>
      <Card onAddPatient={addPatient}/>
      <Turnos pacientes={pacientes}/>
      
    </div>
  );
}

export default App;
