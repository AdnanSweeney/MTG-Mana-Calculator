import React, { Component, useState, useEffect } from "react";
import flame from "./assets/flame.svg";
import skull from "./assets/skull.svg";
import sun from "./assets/sun.svg";
import tree from "./assets/tree.svg";
import water from "./assets/water.svg";
import whiteLogo from "./assets/whiteLogo.png";
import blueLogo from "./assets/blueLogo.svg";

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

const ManabarSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  height: 80px;
  align-items: center;
  width: 70%;
  padding: 10px 25px 10px 20px;
  justify-content: space-between;
`;

export const Title = styled.div`
  display: flex;
  padding: 10px 25px 10px 20px;
  align-items: center;
  padding-bottom: 0;
`;

export const TotalLands = styled(Row)`
  justify-content: flex-end;
  min-width: 350px;
  gap: 20px;
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

  const updatePipCount = (colour, value) => {
    if (!Number.isNaN(value) && value >= 0 && value < 1000) {
      let number = Number(value);

      console.log("Input changed - " + colour + "Symbols is now " + number);
      console.log(
        "Symbols gonna change to " +
          { ...symbols, [`${colour}Symbols`]: number }
      );

      setSymbols({ ...symbols, [`${colour}Symbols`]: number });
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
        <Title>
          <h1 className="App-title"> Manaculator </h1>
          <img src={whiteLogo} className="App-logo" alt="logo" />
        </Title>

        <TotalLands>
          <p className="Lands-title" style={{ textAlign: "right" }}>
            Total Lands
          </p>
          <OutlinedInput
            min="0"
            inputMode="numeric"
            onChange={onTotalLandCountChange}
            value={totalLandCount}
            className="Text-box"
            onFocus={(e) => {
              e.target.select();
            }}
            tabIndex={1}
          />
        </TotalLands>
        <ManabarSection>
          {/* We should be using a map here to create multiple manabars*/}
          <Manabar
            tabIndex={2}
            colour="blue"
            icon={water}
            onNumSymbolsChange={updatePipCount}
            numSymbols={symbols.blueSymbols}
            landCount={lands.blueLands}
          />
          <Manabar
            tabIndex={3}
            colour="red"
            icon={flame}
            onNumSymbolsChange={updatePipCount}
            numSymbols={symbols.redSymbols}
            landCount={lands.redLands}
          />
          <Manabar
            tabIndex={4}
            colour="green"
            icon={tree}
            onNumSymbolsChange={updatePipCount}
            numSymbols={symbols.greenSymbols}
            landCount={lands.greenLands}
          />
          <Manabar
            tabIndex={5}
            colour="black"
            icon={skull}
            onNumSymbolsChange={updatePipCount}
            numSymbols={symbols.blackSymbols}
            landCount={lands.blackLands}
          />
          <Manabar
            tabIndex={6}
            colour="white"
            icon={sun}
            onNumSymbolsChange={updatePipCount}
            numSymbols={symbols.whiteSymbols}
            landCount={lands.whiteLands}
          />
        </ManabarSection>

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
