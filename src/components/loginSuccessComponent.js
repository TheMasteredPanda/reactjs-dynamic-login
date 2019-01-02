import React, { Component } from 'react';

class LoginSuccessComponent extends Component {
    render() { 
        return (<div className="box">
            <h2 id="loginSuccessTitle" className="title">Login Success!</h2>
            <button id="loginSuccessButton" onClick={() => this.props.setPage()} className="button">Reset.</button>
        </div>);
    }
}
 
export default LoginSuccessComponent;