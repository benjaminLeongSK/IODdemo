import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import App from "./App"
import { ThemeProvider, createTheme } from "@mui/material";

const benTheme = createTheme({
    palette: {
        primary: {
            main: "#415a77",
        },
        secondary: {
            main: "#D5F9DE",
        },
    },
    typography: {
        h1: {
            fontSize: "3rem",
            fontWeight: 600,
        },
    }

})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
            <ThemeProvider theme={benTheme}>
                <App />
            </ThemeProvider>
    </StrictMode>
);
