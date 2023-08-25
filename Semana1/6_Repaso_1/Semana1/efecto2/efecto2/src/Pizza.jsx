import { useState, useEffect } from "react";

function Pizza(){
    const[orden,  setOrden] = useState("");

    useEffect(() =>{
            
            

        console.log("Pedido organizado")
        const temporizador= setTimeout(()=>{

            setOrden("Pizza de la rica");
            console.log("El timeout");
        }, 2000)
        }, []
    )

    const HandlerPizza = () =>{

        
        useEffect(() =>{
            
            

            console.log("Pedido organizado")
            const temporizador= setTimeout(()=>{

                setOrden("Pizza de la rica");
                console.log("El timeout");
            }, 2000)
            }, []
        )

        useEffect(() =>{
            console.log("El Pizza está Update")}
        );

        useEffect(() =>{
            console.log("El Pizza ha aumentado")}, [orden]
        )
    }

    const handlerCancelar = () =>{
        alert("El pedido se cancelo")
        console.log("El pedido se cancelo");
        setOrden("")
    }



    return (
            <>
        <div className="App">             
        <h1> Su pedido:</h1>
       <p>{orden}</p>
            
            <button type="button" onClick={handlerCancelar}>Cancelar pedidor</button>
            
        </div>
            </>

    );

}

export default Pizza;