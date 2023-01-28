import React from "react";
import ReactDOM from "react-dom";
import ClassComponent from "./ClassComponents";
import FunctionComponent from "./FunctionComponents";
import AuthButtonProp from "./AuthButtonProp";
import AuthButtonState from "./AuthButtonState";
import ListItems from "./ListItems.js";
import ContactForm from "./ContactForm";

function App() {
    return (

        <>
            <h1>My React Example</h1>
            <ClassComponent name="ben"/>
            <FunctionComponent name="ben"/>
            <AuthButtonProp isLoggedIn={true} />
            <AuthButtonState />
            <ListItems names ={["do", "reh", "me"]} />
            <ContactForm />
            <PopUp>
                <h1>Warning</h1>
                <button>click here</button>
            </PopUp>
        </>


    )
}

ReactDOM.render(<App />, document.getElementById("root"));