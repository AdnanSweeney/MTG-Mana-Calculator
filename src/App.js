import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
      totalLandCount: 17,

      blackSymbols: 0,
      blueSymbols: 0,
      greenSymbols: 0,
      redSymbols: 0,
      whiteSymbols: 0,
      wasteSymbols: 0,

      blackLands: 0,
      blueLands: 0,
      greenLands: 0,
      redLands: 0,
      whiteLands: 0,
      wasteLands: 0

      }
  }

  /*

  onChange = (e) => {

    let val = e.target.value;
    let id = e.target.id;

    this.setStae( [id + "Symbols"]: val);

  }

  */

  render() {

    return (

      <div className="App">

        <header className="App-header">

          <img src={logo} className="App-logo" alt="logo" />

          <h1 className="App-title">Welcome to React</h1>

        </header>

        <p className="App-intro">

          To get started, edit <code>src/App.js</code> and save to reload.

        </p>

      </div>
    );
  }
}

export default App;
