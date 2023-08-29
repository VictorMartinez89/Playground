import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const[ordenar, setOrdenar] = useState("");
  const[loading, setLoading] = useState(true);

 useEffect(()=> {handleHelp()}, [])  

  const handleHelp = () => {
    fetch('https://meowfacts.herokuapp.com/')
          .then((response)=> response.json())
          .then((data)=>{

            
            setOrdenar(data.data)
            setLoading(false)
            console.log("Loading esta abierta")
          }).catch((error)=>{
            console.error(error)
        })
  }

  return (
    <>
      <div className="App">
      <h1> Dogs, Cats, Cows, Tigers... Animals tell :</h1>
      {loading ? (
        <p>Cargando...</p>
      ):(
        <div>
        
        <h1>{ordenar} </h1>
       <button onClick={handleHelp}>Enviar</button>
        </div>
      )}
      
      </div>
    </>
  )
}


export default App
