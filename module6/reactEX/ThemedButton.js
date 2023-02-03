import React from "react";
import {ThemeContext} from "./ThemeComponent";

function ThemedButton() {
    const theme = React.useContext(ThemeContext);

    return (
        <button style={{background: theme.background}}></button>
    );
}

export default ThemedButton;