import {useState} from "react"

function Form(){


    const [nombre, setNombre]= useState("")

    function handleNombre(e){
        setNombre(e.target.value)
    }

    function registrar(e){
        e.preventDefault();
        console.log("Usuario registrado")
        console.log(nombre)
    }

    return(
        <div>
            <h2> Mi registro</h2>
            <form onSubmit={registrar}>
                <div>
                    <input type="text" placeholder="Ingrese su nombre" onChange={handleNombre}/>
                    <input type="submit" placeholder="registrar"/>
                </div>

            </form>
        </div>
    )
}

export default Form;