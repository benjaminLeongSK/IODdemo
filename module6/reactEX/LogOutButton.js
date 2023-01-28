import React from "react";

class LogOutButton extends React.Component {
    render() {
        return <button onClick ={this.props.myClick}>Log Out</button>;
    }
}

export default LogOutButton;