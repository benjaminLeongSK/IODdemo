import React from "react";
import ReactDOM from "react-dom";
import ClassComponent from "./ClassComponents";
import FunctionComponent from "./FunctionComponents";

function App() {
    return (

        <>
            <h1>My React Example</h1>
            <ClassComponent />
            <FunctionComponent />
        </>


    )
}

ReactDOM.render(<App />, document.getElementById("root"));