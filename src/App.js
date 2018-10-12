import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Manabar from './components/Manabar.js';

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

        <Manabar colour="Blue" />
        <Manabar colour="Red" />
        <Manabar colour="Green" />
        <Manabar colour="Black" />
        <Manabar colour="White" />
        <Manabar colour="DarkGrey" />

      </div>
    );
  }
}

export default App;
