import React  from "react";
import  ReactDOM  from "react-dom/cliente";
import Padre from "./Padre";
import Hijo from "./Hijo";

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        <Padre>
            <Hijo nombre="Pepe"/>
             <Hijo nombre="Laura"/>
              <Hijo nombre="Fernando"/>
        </Padre>
    </React.StrictMode>
)