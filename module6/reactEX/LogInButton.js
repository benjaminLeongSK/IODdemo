import React from "react";

class LogInButton extends React.Component {
    render() {
        return <button onClick ={this.props.myClick}>Log In</button>;
    }
}

export default LogInButton;