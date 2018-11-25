import React, { Component } from 'react';
import logo from './logo.svg';
import card from './card.svg';
import './App.css';
import Manabar from './components/Manabar.js';
import { calculateLandsFromSymbols } from './helpers/calculateLandsFromSymbols';

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
      greyLands: 0

      }
  }

  onNumSymbolsChange = (e) => {

    // Parse the input field value as a number to allow mathematic operations
    let val = Number(e.target.value);
    let id = e.target.id;

    if (id !== "totalLandCount") {

      id += "Symbols";

    }

    // Update state then re-calculate required lands after state has changed
    console.log("Input changed - " + id + "Symbols is now " + val);
    this.setState({ [id]: val }, () => {

      let numLandsJson =  calculateLandsFromSymbols(  
                            this.state.totalLandCount,
                            this.state.blueSymbols,
                            this.state.redSymbols,
                            this.state.greenSymbols,
                            this.state.blackSymbols,
                            this.state.whiteSymbols,
                            this.state.greySymbols );

      this.setState( numLandsJson );

      console.log(this.state);
      
    });

  }


  render() {

    let { blackSymbols, blueSymbols, greenSymbols, redSymbols, whiteSymbols, greySymbols,
          blackLands, blueLands, greenLands, redLands, whiteLands, greyLands } = this.state;

    return (

      <div className="App">

        <header className="App-header">

          <img src={card} className="App-logo" alt="logo" />

          <h1 className="App-title"> Mana Calculator </h1>

          <br />

          <div className={"Flex-row ActiveRow"} style={{justifyContent: "space-between", boxShadow: "0px 0px 0px 0px"}}>
            <h1 className="App-title"> Total Lands </h1>
            <input min="0" id="totalLandCount" type="number" onChange={this.onNumSymbolsChange} value={this.state.totalLandCount} className="Text-box" />
          </div>

        </header>
       

        <Manabar colour="blue" onNumSymbolsChange={this.onNumSymbolsChange} numSymbols={blueSymbols} landCount={blueLands}/>
        <Manabar colour="red" onNumSymbolsChange={this.onNumSymbolsChange} numSymbols={redSymbols} landCount={redLands}/>
        <Manabar colour="green" onNumSymbolsChange={this.onNumSymbolsChange} numSymbols={greenSymbols} landCount={greenLands}/>
        <Manabar colour="black" onNumSymbolsChange={this.onNumSymbolsChange} numSymbols={blackSymbols} landCount={blackLands}/>
        <Manabar colour="white" onNumSymbolsChange={this.onNumSymbolsChange} numSymbols={whiteSymbols} landCount={whiteLands}/>
        <Manabar colour="grey" onNumSymbolsChange={this.onNumSymbolsChange} numSymbols={greySymbols} landCount={greyLands}/>

      </div>
    );
  }
}

export default App;
