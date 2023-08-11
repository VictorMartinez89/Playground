

function Hijo({count, setCount}){

    return(
        <div>
            <h1> El valor es : {count}</h1>
            <button onClick={()=> setCount(count-1)}> Incrementar</button>            
        </div>
    )

}

export default Hijo;