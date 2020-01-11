import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const welcome = "Hello Walter. You got this!!!";

class App extends Component {
    toggle = () => {


    }
  render(){return (
    <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome text="YES YES YES Y'ALL"/>
        <a className="App-link" 
            href="https://reactjs.org" 
            target="_blank" 
            rel="noopener noreferrer" >
                Learn React
        </a>
        </header>
        <input type="text" />
        <button onClick = {this.toggle}>Show Value</button>
    </div>
    );
    }
}


class Welcome extends Component {
    render(){
        const {text} = this.props;
        return (
            <h1 className="App-title">{text}</h1>
        )
    }
}

export default App;
