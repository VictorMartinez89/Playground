import { useState } from "react";

function Pokemon(){

    const[Nombre,  setNombre]= useState("")
    const[Edad, setEdad]= useState("")
    const[Pokemon, setPokemon]= useState("")

    function clear(){
        setNombre("")
        setEdad("")
        setPokemon("")
    }

    function handleNombre(e){
        setNombre(e.target.value)
    }

    function handleEdad(e){
        setEdad(e.target.value)
    }

    function handlePokemon(e){
        setPokemon(e.target.value)
    }

    function registar(e){
        e.preventDefault();
        console.log("Se guardaron los datos correctamente")
        console.log("Usuario, edad y favorito de Pokemon")
        console.log(Nombre)
        console.log(Edad)
        console.log(Pokemon)

        alert(`Se guardaron los datos correctamente de ${Nombre}, ${Edad} años y su favorito de Pokemon de ${Pokemon}`)

    }

    return (
        <div className="text1">
            <h1> Mi registro</h1>
            <form onSubmit={registar}>
                <div>
                    <label>Nombre</label>
                    <input type="text" placeholder="Ingrese su nombre" onChange={handleNombre} value={Nombre}/>
                    
                    <label>Edad</label>
                    <input type="text" placeholder="Ingrese a edad" onChange={handleEdad} value={Edad}/>
                    
                    <label>Favorito de Pokemon</label>
                    <input type="text" placeholder="Favorito de Pokemon" onChange={handlePokemon} value={Pokemon}/>

                    <input type="submit" placeholder="Enviar"/>
                </div>

            </form>
        </div>
    )
}

export default Pokemon;