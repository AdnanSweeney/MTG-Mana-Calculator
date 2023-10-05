import React from "react";
import "../App.css";
import { styled } from "styled-components";
import { Row } from "../App";
import up from "../assets/up.svg";
import down from "../assets/down.svg";

const Container = styled.div`
  display: flex;
  height: 80px;
  align-items: center;
  width: 70%;
  min-width: 350px;
  padding: 10px 25px 10px 20px;
  justify-content: space-between;

  border-radius: 50px 50px 50px 50px;
  filter: drop-shadow(0px 8px 20px rgba(65, 208, 208, 0.15));
  background-color: #282e50;
`;

const TextBox = styled.input`
  width: 40px;
  height: 30px;
  background-color: transparent;
  text-align: center;
  font-size: 1.25rem;
  color: #41d0d0;
  text-shadow: 8px 8px 25px 0px rgba(0, 255, 255, 0.2);
  border: none;
`;

export const OutlinedInput = styled.input`
  border: solid 3px #41d0d0;
  border-radius: 25px;
  box-shadow: 8px 8px 25px 0px rgba(0, 255, 255, 0.2);
  width: 65px;
  height: 70%;
  background-color: transparent;
  text-align: center;
  font-size: 1.25rem;
  color: #41d0d0;
  text-shadow: 8px 8px 25px 0px rgba(0, 255, 255, 0.2);
`;

const Icon = styled.img`
  height: 48px;
  filter: drop-shadow(0px 4px 10px rgba(0, 255, 255, 0.53));
`;

const IconButton = styled.img`
  height: 25px;
  filter: drop-shadow(0px 4px 10px rgba(0, 255, 255, 0.2));
  -webkit-tap-highlight-color: transparent;
  &:hover {
    filter: drop-shadow(0px 4px 10px rgba(0, 255, 255, 1.83));
    transform: scale(1.1, 1.1);
    cursor: pointer;
  }
  &:active {
    filter: drop-shadow(0px 4px 10px rgba(0, 255, 255, 0.53));
    transform: scale(1, 1);
  }
`;

const Counter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const ManaBar = ({
  numSymbols,
  colour,
  tabIndex,
  onNumSymbolsChange,
  landCount,
  icon,
}) => {
  return (
    <Container>
      <Icon src={icon} className="Mana-logo" alt="icon" />
      <Counter>
        <IconButton
          src={down}
          alt="increment"
          onClick={() => {
            onNumSymbolsChange(colour, numSymbols - 1);
          }}
        />

        <TextBox
          id={colour}
          inputMode="numeric"
          onChange={(e) => onNumSymbolsChange(colour, e.target.value)}
          value={numSymbols ?? 0}
          onFocus={(e) => {
            e.target.select();
          }}
          tabIndex={tabIndex}
        />
        <IconButton
          src={up}
          alt="decrement"
          onClick={() => {
            onNumSymbolsChange(colour, numSymbols + 1);
          }}
        />
      </Counter>

      {/* <Button>
        <Icon src={icon} className="Mana-logo" alt="icon" />
      </Button> */}

      <OutlinedInput
        type="text"
        value={!numSymbols ? "" : landCount}
        readOnly
      />
    </Container>
  );
};

export default ManaBar;
