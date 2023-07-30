import React, { Component, useState } from "react";
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
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Disclaimer = styled.p`
  color: #41d0d0;
  font-size: 0.5em;
  margin: 5%;
  margin-top: 10%;
  text-shadow: 8px 8px 25px 0px rgba(0, 255, 255, 0.2);
`;

const App = () => {
  const [state, setState] = useState({
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
  });

  const onNumSymbolsChange = (e) => {
    if (Number(e.target.value) != NaN && e.target.value >= 0) {
      // Parse the input field value as a number to allow mathematic operations
      let val = Number(e.target.value);
      let id = e.target.id;

      if (id !== "totalLandCount") {
        id += "Symbols";
      }

      // Update state then re-calculate required lands after state has changed
      console.log("Input changed - " + id + "Symbols is now " + val);
      setState({ [id]: val }, () => {
        let numLandsJson = calculateLandsFromSymbols(
          state.totalLandCount,
          state.blueSymbols,
          state.redSymbols,
          state.greenSymbols,
          state.blackSymbols,
          state.whiteSymbols,
          state.greySymbols
        );

        setState(numLandsJson);

        console.log(state);
      });
    }
  };

  return (
    <Container>
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
              onChange={onNumSymbolsChange}
              value={state.totalLandCount}
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
          onNumSymbolsChange={onNumSymbolsChange}
          numSymbols={state.blueSymbols}
          landCount={state.blueLands}
        />
        <Manabar
          tabIndex={3}
          colour="red"
          icon={flame}
          onNumSymbolsChange={onNumSymbolsChange}
          numSymbols={state.redSymbols}
          landCount={state.redLands}
        />
        <Manabar
          tabIndex={4}
          colour="green"
          icon={tree}
          onNumSymbolsChange={onNumSymbolsChange}
          numSymbols={state.greenSymbols}
          landCount={state.greenLands}
        />
        <Manabar
          tabIndex={5}
          colour="black"
          icon={skull}
          onNumSymbolsChange={onNumSymbolsChange}
          numSymbols={state.blackSymbols}
          landCount={state.blackLands}
        />
        <Manabar
          tabIndex={6}
          colour="white"
          icon={sun}
          onNumSymbolsChange={onNumSymbolsChange}
          numSymbols={state.whiteSymbols}
          landCount={state.whiteLands}
        />

        <Disclaimer>
          The graphics presented on this site about Magic: The Gathering
          including mana symbols is copyright Wizards of the Coast, LLC, a
          subsidiary of Hasbro, Inc. This website is not produced by, endorsed
          by, supported by, or affiliated with Wizards of the Coast
        </Disclaimer>
      </div>
    </Container>
  );
};

export default App;
