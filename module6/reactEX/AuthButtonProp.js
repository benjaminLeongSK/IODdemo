import React from "react";
import LoginButton from "./LogInButton";
import LogoutButton from "./LogOutButton";

class AuthButtonProp extends React.Component {
    render() {
        const isLoggedIn = this.props.isLoggedIn;
        return <>{isLoggedIn ? <LogoutButton /> : <LoginButton />}</>;
    }
}

export default AuthButtonProp;