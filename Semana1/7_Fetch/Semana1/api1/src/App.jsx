import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [dogImage, setDogImage]= useState("");
  const[loading, setLoading] = useState(true);

  useEffect(() =>{

    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) =>response.json()
    )
    .then((data)=>{
        setDogImage(data.message);
        setLoading(false);
        console.log("Loading esta save");
    })
    .catch((error) =>{
      console.error("Error al obtener una respuesta", error);
    })
  },[])


  return (
    <div className='App'>
      <h1>miroperros.com</h1>
      {loading ?(
        <p> Cargando...</p>
      ):(
        <div>
          <img src={dogImage} alt="Foto dog"></img>
        </div>
      )}
      
    </div>
  )
}

export default App
