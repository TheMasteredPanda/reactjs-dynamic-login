import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LoginComponent from './components/loginComponent'
import LoginSuccessComponent from './components/loginSuccessComponent'
import './index.css'

class App extends Component {
    state = {
        page: 0
    }

    

    setPage(page) {
        let state = this.state;
        state.page = page;
        this.setState(state);
    }


    getStage() {
        switch (this.state.page) {
            case 0: {
                return <LoginComponent setPage={() => this.setPage(1)}/>
            }

            case 1: {
                return <LoginSuccessComponent setPage={() => this.setPage(0)}/>
            }

            case 2: {

            }

            case 3: {

            }

            default: {
                alert("Couldn't determine which page to show.");
                return;
            }
        }
    }

    render() { 
        return (this.getStage());
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
 
