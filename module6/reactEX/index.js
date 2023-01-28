import React from "react";
import ReactDOM from "react-dom";
import ClassComponent from "./ClassComponents";

function App() {
    return (

        <>
            <h1>My React Example</h1>
            <ClassComponent />
        </>


    )
}

ReactDOM.render(<App />, document.getElementById("root"));