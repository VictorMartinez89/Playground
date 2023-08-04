import "./App.css"

import Hijo from "./Hijo"

function Padre(props){
    return(
        <div className="Padre">
            {props.children}

        </div>
    )
}
export default Padre;