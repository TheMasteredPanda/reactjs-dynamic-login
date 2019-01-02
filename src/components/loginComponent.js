import React, { Component } from 'react';

class LoginComponent extends Component {
    constructor(props) {
        super(props)

    }

    onLoginButtonClick() {
        let passwordInput = document.getElementById("passwordInput");

        if (passwordInput.innerHTML != "test") {
            passwordInput.classList.add("incorrect-login");
            // this.forceUpdate();
            alert("Incorrect password.");
        } else {
            alert("Correct password.");
            return this.props.getPage();
        }
    }

    render() { 
        return (<div className="box" id="loginBox">
            <h2 className="title">Username</h2>
            <input type="text" placeholder="Username" className="input"/>
            <h2 className="title">Password</h2>
            <input id="passwordInput" placeholder="Password" className="input" type="password"/>
            {/* <a href="#">Forgot Password?</a> */}
            <button className="button" id="login" onClick={() => {this.onLoginButtonClick()}}>Login</button>
        </div>);
    }
}
 
export default LoginComponent;