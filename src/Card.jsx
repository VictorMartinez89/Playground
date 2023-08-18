//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario
import { useState} from 'react';


function Card({onAddPatient}) {

  const[Nombre,  setNombre]= useState("")
  const[Apellido, setApellido]= useState("")
  const[Mascota, setMascota]= useState("")
  const[Raza, setRaza]= useState("")
  const[Edad, setEdad]= useState("")

  function clear(){
      setNombre("")
      setApellido("")
      setMascota("")
      setRaza("")
      setEdad("")
  }

  function handleNombre(e){

           setNombre(e.target.value)
      
  }

  function handleApellido(e){
    
        setApellido(e.target.value)
    
  }

  function handleMascota(e){
      setMascota(e.target.value)
  }

  function handleRaza(e){
    setRaza(e.target.value)
  }

  function handleEdad(e){
    setEdad(e.target.value)
}


  const handleSubmit= (e)=>{
      e.preventDefault();
      if(Nombre && Apellido && Mascota && Raza && Edad){
        alert(`Se guardaron los datos correctamente. 
        
        ${Nombre} ${Apellido} con un mascota llamada ${Mascota}, raza es ${Raza} y edad es de ${Edad} años!!`)

        onAddPatient({Nombre, Apellido, Mascota, Raza, Edad})
        clear();
            
      }else{
        alert(`Por favor chequea que la información sea correcta`)
      }
  }

  return (
    <div className="text1">
            <h1> Mi registro</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre</label>
                    <input type="text" placeholder="Ingrese su nombre" onChange={(e)=>{
                      //if(Nombre.length >= 3 ){
                     // console.log(Nombre.length)
                      handleNombre(e)
                      
                      }}
                       value={Nombre}/>

                    <label>Apellido</label>
                    <input type="text" placeholder="Ingrese su apellido" onChange={(e)=>{ 
                     // if(Apellido.length >= 6 ){
                      handleApellido(e)
                     
                    }
                      } value={Apellido}/>

                    <label>Mascota</label>
                    <input type="text" placeholder="Ingrese su mascota" onChange={(e)=>handleMascota(e)} value={Mascota}/>

                    <label>Raza</label>
                    <input type="text" placeholder="Ingrese su raza" onChange={(e)=>handleRaza(e)} value={Raza}/>

                    <label>Edad</label>
                    <input type="text" placeholder="Ingrese a edad" onChange={(e)=>handleEdad(e)} value={Edad}/>
                    
                    <input type="submit" placeholder="Enviar"/>
                </div>

            </form>
        </div>
  )
}

export default Card;
