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
      greySymbols: 0,

      blackLands: 0,
      blueLands: 0,
      greenLands: 0,
      redLands: 0,
      whiteLands: 0,
      wasteLands: 0

      }
  }

  onNumSymbolsChange = (e) => {

    let val = e.target.value;
    let id = e.target.id;

    console.log("Input changed - " + id + "Symbols is now " + val);
    this.setState({ [id + "Symbols"]: val});

  }


  render() {

    let { blackSymbols, blueSymbols, greenSymbols, redSymbols, whiteSymbols, greySymbols} = this.state;

    return (

      <div className="App">

        <header className="App-header">

          <img src={logo} className="App-logo" alt="logo" />

          <h1 className="App-title">Welcome to React</h1>

        </header>

        <Manabar colour="blue" onNumSymbolsChange={this.onNumSymbolsChange} numSymbols={blueSymbols}/>
        <Manabar colour="red" onNumSymbolsChange={this.onNumSymbolsChange} numSymbols={redSymbols}/>
        <Manabar colour="green" onNumSymbolsChange={this.onNumSymbolsChange} numSymbols={greenSymbols}/>
        <Manabar colour="black" onNumSymbolsChange={this.onNumSymbolsChange} numSymbols={blackSymbols}/>
        <Manabar colour="white" onNumSymbolsChange={this.onNumSymbolsChange} numSymbols={whiteSymbols}/>
        <Manabar colour="grey" onNumSymbolsChange={this.onNumSymbolsChange} numSymbols={greySymbols}/>

      </div>
    );
  }
}

export default App;
