function Turnos({pacientes}){

    return(
        <> 
        <div>
            <h2>Turnos</h2>
            
            {pacientes.map((paciente, index) => ( 
                <div key={index} className="Card">
                    <h3>{paciente.Nombre} {paciente.Apellido} {paciente.Mascota} {paciente.Raza} {paciente.Edad}</h3>
                </div>
            ))}      
        </div>
        </> 
        )
    }
    
    
    export default Turnos;