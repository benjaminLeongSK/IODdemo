import React from "react";
import ReactDOM from "react-dom";
import ClassComponent from "./ClassComponents";
import FunctionComponent from "./FunctionComponents";
import AuthButtonProp from "./AuthButtonProp";
import AuthButtonState from "./AuthButtonState";


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