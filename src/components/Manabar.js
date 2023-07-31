import React from "react";
import "../App.css";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  height: 80px;
  border-radius: 50px 50px 50px 50px;
  margin: 10px;
  filter: drop-shadow(0px 8px 20px rgba(65, 208, 208, 0.15));
  background-color: #282e50;
  align-items: center;
  width: 80%;
  min-width: 300px;
  padding: 10px 30px;
  justify-content: space-between;
`;

const TextBox = styled.input`
  width: 50px;
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
  height: 50px;
  filter: drop-shadow(0px 4px 10px rgba(0, 255, 255, 0.53));
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
      <TextBox
        id={colour}
        inputMode="numeric"
        onChange={onNumSymbolsChange}
        value={numSymbols ?? 0}
        onFocus={(e) => {
          e.target.select();
        }}
        tabIndex={tabIndex}
      />

      <OutlinedInput
        type="text"
        value={!numSymbols ? "" : landCount}
        readOnly
      />
    </Container>
  );
};

export default ManaBar;
