function Cumpleanos (age, setAge){

    return (
        <div>

           <h1> El Cumpleaños son  {age} años</h1>
            <button onClick={()=> setAge(age-1)}> Incrementar</button> 
                
            

        </div>
    )
}

export default Cumpleanos; 