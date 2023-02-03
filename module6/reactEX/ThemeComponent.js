import React from "react";
import Toolbar from "./Toolbar";

const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    },
};

export const ThemeContext= React.createContext(themes.dark);

function ThemeComponent() {
    return(
        <ThemeContext.Provider value ={themes.light}>
            <h2> This is the ThemeComponent</h2>
            <Toolbar />
        </ThemeContext.Provider>
    )
}

export default ThemeComponent;