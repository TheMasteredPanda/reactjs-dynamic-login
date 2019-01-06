import React, { Component } from 'react';

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            incorrectPassword: false,
            incorrectUsername: false
        }

    }

    onLoginButtonClick() {
        let passwordInput = document.getElementById("passwordBox");
        let usernameInput = document.getElementById("usernameBox");
        let copy = this.state;
           
        if (passwordInput.value !== "test") {
            console.log(`Incorrect password.`);
            copy.incorrectPassword = true; 
        }

        if (usernameInput.value !== "testUser") {
            console.log(`Incorrect username.`);
            copy.incorrectUsername = true;
        }

        if (copy.incorrectPassword || copy.incorrectPassword || (copy.incorrectPassword && copy.incorrectUsername)) {
            this.setState(copy);
            return;
        }

        this.props.setPage();
    }

    onPasswordContentChange() {
        let copy = this.state;
        copy.incorrectPassword = false;
        this.setState(copy);
    }

    onUsernameContentChange() {
        let copy = this.state;
        copy.incorrectUsername = false;
        this.setState(copy);
    }

    render() { 
        return (<div className="box" id="loginBox">
            <h2 className="title">Username</h2>
            <input id="usernameBox" type="text" placeholder="Username" className={`${this.state.incorrectUsername ? 'input incorrect' : 'input'}`} onChange={() => this.onUsernameContentChange()}/>
            <h2 className="title">Password</h2>
            <input id="passwordBox" placeholder="Password" className={`${this.state.incorrectPassword ? 'input incorrect' : 'input'}`} onChange={() => this.onPasswordContentChange()} type="password"/>
            {/* <a href="#">Forgot Password?</a> */}
            <button className="button" id="loginButton" onClick={() => {this.onLoginButtonClick()}}>Login</button>
        </div>);
    }
}
 
export default LoginComponent;