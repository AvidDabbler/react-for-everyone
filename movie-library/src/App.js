import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const welcome = "Hello Walter. You got this!!!";

class App extends Component {
    state = {
        input: 'Hello there'
    }

    updateInput = (ev)=> {
        this.setState({
            input: ev.target.value.trim()
        })
    }

    submit = () => {
        console.log(this.newItemCouldBeAnything.value); // this.newItemCouldBeAnything is connected to a node element
        this.newItemCouldBeAnything.value = '';
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
        {/* below input is just the type and 
            - onChange controls the input whenever there is a change (works on all input events)
        */}
        <h3>{this.state.input}</h3>
        <input type="text" onChange ={this.updateInput} value = {this.state.input} /> 
        <input type="text" ref={(textBoxContents)=>this.newItemCouldBeAnything = textBoxContents}/>
        <button onClick = {this.submit}>Show Value</button>
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