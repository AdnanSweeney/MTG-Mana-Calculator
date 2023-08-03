import React, { Component, useState, useEffect } from "react";
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
import { OutlinedInput } from "./components/Manabar";

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
  const [symbols, setSymbols] = useState({
    blackSymbols: 0,
    blueSymbols: 0,
    greenSymbols: 0,
    redSymbols: 0,
    whiteSymbols: 0,
    greySymbols: 0,
  });

  const [totalLandCount, setTotalLandCount] = useState(17);
  const [lands, setLands] = useState({
    blackLands: 0,
    blueLands: 0,
    greenLands: 0,
    redLands: 0,
    whiteLands: 0,
    greyLands: 0,
  });

  const onSymbolsChange = (e) => {
    if (!Number.isNaN(e.target.value) && e.target.value >= 0) {
      let val = Number(e.target.value);
      let id = e.target.id;

      console.log("Input changed - " + id + "Symbols is now " + val);

      setSymbols({ ...symbols, [`${id}Symbols`]: val });
    }
  };

  const onTotalLandCountChange = (e) => {
    if (!Number.isNaN(e.target.value) && e.target.value >= 0) {
      let val = Number(e.target.value);

      setTotalLandCount(val);
    }
  };

  useEffect(() => {
    const numLands = calculateLandsFromSymbols(
      totalLandCount,
      symbols.blueSymbols,
      symbols.redSymbols,
      symbols.greenSymbols,
      symbols.blackSymbols,
      symbols.whiteSymbols,
      symbols.greySymbols
    );

    console.log("numlands", numLands);

    setLands(numLands);
  }, [totalLandCount, symbols]);

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
            <OutlinedInput
              min="0"
              id="totalLandCount"
              inputMode="numeric"
              onChange={onTotalLandCountChange}
              value={totalLandCount}
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
          onNumSymbolsChange={onSymbolsChange}
          numSymbols={symbols.blueSymbols}
          landCount={lands.blueLands}
        />
        <Manabar
          tabIndex={3}
          colour="red"
          icon={flame}
          onNumSymbolsChange={onSymbolsChange}
          numSymbols={symbols.redSymbols}
          landCount={lands.redLands}
        />
        <Manabar
          tabIndex={4}
          colour="green"
          icon={tree}
          onNumSymbolsChange={onSymbolsChange}
          numSymbols={symbols.greenSymbols}
          landCount={lands.greenLands}
        />
        <Manabar
          tabIndex={5}
          colour="black"
          icon={skull}
          onNumSymbolsChange={onSymbolsChange}
          numSymbols={symbols.blackSymbols}
          landCount={lands.blackLands}
        />
        <Manabar
          tabIndex={6}
          colour="white"
          icon={sun}
          onNumSymbolsChange={onSymbolsChange}
          numSymbols={symbols.whiteSymbols}
          landCount={lands.whiteLands}
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
