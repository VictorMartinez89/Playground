import "./App.css"

function Hijo(props){
    return(

        <div className="Hijo">
                <h2>Nombre:{props.nombre}</h2>
                <h2>Edad:{props.edad}</h2>
        </div>
    )
}