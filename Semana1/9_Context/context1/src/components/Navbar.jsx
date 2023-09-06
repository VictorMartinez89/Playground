import { useContext } from "react";
import ThemeContext from "../context";



const Navbar=()=>{


    const {theme, handleChangeTheme} = useContext(ThemeContext);

    return (
        <div>
            
            <p>Home</p>
            <button onClick={handleChangeTheme} 
            style={{backgroundColor: theme.background, color: theme.font}}>
                Cambiar tema
            </button>
        </div>
    );

}

export default Navbar;