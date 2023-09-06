import { createContext } from "react";

export const  themes= {
    light:{
        font: "black",
        background: "white"
},
dark:{
    font:"white",
    background: "black"
}
}

const ThemesContext = createContext(themes.light);

export default ThemesContext;