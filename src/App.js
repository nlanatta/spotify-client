import React, { Component } from 'react';
import logo from './logo.png';
import Routes from './Routes'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        extraData: null
    };    
}

  addExtraChildData(data) {
    this.setState(
      {
        extraData: data
      }
    );
  }

  getExtraData() {
    return this.state.extraData;
  }

  render() {
    const childProps = {
      addExtraChildData : this.addExtraChildData.bind(this),
      extraData : this.getExtraData.bind(this)
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
