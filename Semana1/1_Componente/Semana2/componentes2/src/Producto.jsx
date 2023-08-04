import App from "./App.css"

function Product(props){
    return(
            <div className="Product">   
            
                <h2>nombre:{props.nombre}</h2>
                <h2>precio:{props.precio}</h2>
            </div>
    )
}



export default Product