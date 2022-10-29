import React, { Component } from "react";
import card from "./assets/card.svg";
import flame from "./assets/flame.svg";
import skull from "./assets/skull.svg";
import sun from "./assets/sun.svg";
import tree from "./assets/tree.svg";
import water from "./assets/water.svg";
import cube from "./assets/cube.svg";
import whiteLogo from "./assets/whiteLogo.png";

import "./App.css";
import Manabar from "./components/Manabar.js";
import { calculateLandsFromSymbols } from "./helpers/calculateLandsFromSymbols";

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
      greyLands: 0,
    };
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
      let numLandsJson = calculateLandsFromSymbols(
        this.state.totalLandCount,
        this.state.blueSymbols,
        this.state.redSymbols,
        this.state.greenSymbols,
        this.state.blackSymbols,
        this.state.whiteSymbols,
        this.state.greySymbols
      );

      this.setState(numLandsJson);

      console.log(this.state);
    });
  };

  render() {
    let {
      blackSymbols,
      blueSymbols,
      greenSymbols,
      redSymbols,
      whiteSymbols,
      greySymbols,
      blackLands,
      blueLands,
      greenLands,
      redLands,
      whiteLands,
      greyLands,
    } = this.state;

    return (
      <div className="App-wrapper">
        <div className="App">
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
          />
          <header className="App-header">
            <h1 className="App-title"> Manaculator </h1>
            <img src={whiteLogo} className="App-logo" alt="logo" />
          </header>

          <div
            className={"Flex-row ActiveRow"}
            style={{ boxShadow: "none", borderColor: "transparent" }}
          >
            <div
              className="Flex-item Flex-mana-logo"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <p className="Lands-title" style={{ textAlign: "right" }}>
                {" "}
                Total Lands{" "}
              </p>
            </div>
            <div className="Flex-item"></div>
            <div className="Flex-item">
              <input
                min="0"
                id="totalLandCount"
                type="number"
                onChange={this.onNumSymbolsChange}
                value={this.state.totalLandCount}
                className="Text-box"
                onFocus={(e) => {
                  e.target.select();
                }}
                tabIndex={1}
              />
            </div>
          </div>

          {/* We should be using a map here to create multiple manabars*/}
          <Manabar
            tabIndex={2}
            colour="blue"
            icon={water}
            onNumSymbolsChange={this.onNumSymbolsChange}
            numSymbols={blueSymbols}
            landCount={blueLands}
          />
          <Manabar
            tabIndex={3}
            colour="red"
            icon={flame}
            onNumSymbolsChange={this.onNumSymbolsChange}
            numSymbols={redSymbols}
            landCount={redLands}
          />
          <Manabar
            tabIndex={4}
            colour="green"
            icon={tree}
            onNumSymbolsChange={this.onNumSymbolsChange}
            numSymbols={greenSymbols}
            landCount={greenLands}
          />
          <Manabar
            tabIndex={5}
            colour="black"
            icon={skull}
            onNumSymbolsChange={this.onNumSymbolsChange}
            numSymbols={blackSymbols}
            landCount={blackLands}
          />
          <Manabar
            tabIndex={6}
            colour="white"
            icon={sun}
            onNumSymbolsChange={this.onNumSymbolsChange}
            numSymbols={whiteSymbols}
            landCount={whiteLands}
          />
          <Manabar
            tabIndex={7}
            colour="grey"
            icon={cube}
            onNumSymbolsChange={this.onNumSymbolsChange}
            numSymbols={greySymbols}
            landCount={greyLands}
          />

          <p className="disclaimer">
            The graphics presented on this site about Magic: The Gathering
            including mana symbols is copyright Wizards of the Coast, LLC, a
            subsidiary of Hasbro, Inc. This website is not produced by, endorsed
            by, supported by, or affiliated with Wizards of the Coast
          </p>
        </div>
      </div>
    );
  }
}

export default App;
