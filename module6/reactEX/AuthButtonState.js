import React from "react";
import LogInButton from "./LogInButton";
import LogOutButton from "./LogOutButton";

class AuthButtonState extends React.Component {
    constructor() {
        super();
        this.state = { isLoggedIn: false };
        this.handleClick = this.handleClick.bind(this);
    };
};

handleClick() {
    this.setState({ isLoggedIn = this.state.isLoggedIn});
}

render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
        <>
            {isLoggedIn ? (
                <LogOutButton myClick={this.handleClick} />
            ) : (
                <LogInButton myClick={this.handleClick} />
            )}
        </>
    );
}

export default AuthButtonState;