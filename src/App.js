import React, { Component } from 'react';
import logo from './logo.png';
import Routes from './Routes'
import './App.css';

class App extends Component {
  render() {
    const childProps = {
      id : ""
    };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1 className="App-title">Welcome to Spotify Api</h1>
        <Routes childProps={childProps}/>
      </div>
    );
  }
}

export default App;
