import React, { Component } from 'react';

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            incorrect: false
        }

    }

    onLoginButtonClick() {
        let passwordInput = document.getElementById("passwordInput");

        if (passwordInput.innerHTML !== "test") {
            // passwordInput.classList.add("incorrect-login");
            let copy = this.state;
            copy.incorrect = true;
            console.log(`Incorrect boolean: ${copy.incorrect}`);
            this.setState(copy);
            return;
        }

        this.props.setPage();
    }

    render() { 
        return (<div className="box" id="loginBox">
            <h2 className="title">Username</h2>
            <input type="text" placeholder="Username" className="input"/>
            <h2 className="title">Password</h2>
            <input id="passwordInput" placeholder="Password" className={`input ${this.state.incorrect ? 'incorrect-login' : ''}`} type="password"/>
            {/* <a href="#">Forgot Password?</a> */}
            <button className="button" id="login" onClick={() => {this.onLoginButtonClick()}}>Login</button>
        </div>);
    }
}
 
export default LoginComponent;