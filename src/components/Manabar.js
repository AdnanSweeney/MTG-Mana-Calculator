import React from "react";
import "../App.css";

class ManaBar extends React.Component {
  // getActiveClassName returns a string that add classes to the Flex Row base on landCount
  getActiveClassName() {
    // Begin with null so that when landCount is zero, we don't add any classes
    let className = "";

    console.log("Props we receive from parent: " + this.props.numSymbols);
    // If numSymbols > 1 then add CSS layers to that row
    if (this.props.numSymbols) {
      className = "ActiveRow";
    }

    return className;
  }

  render() {
    return (
      <div
        className={
          "Flex-row " +
          this.props.colour +
          "RowClass " +
          this.getActiveClassName()
        }
      >
        <div className="Flex-item Flex-mana-logo">
          <img src={this.props.icon} className="Mana-logo" alt="icon" />
        </div>

        <div className="Flex-item">
          <input
            id={this.props.colour}
            pattern="[0-9]*"
            inputMode="numeric"
            onChange={this.props.onNumSymbolsChange}
            className="Text-box"
            onFocus={(e) => {
              e.target.select();
            }}
            tabIndex={this.props.tabIndex}
          />
        </div>

        <div className="Flex-item">
          <input
            className="Text-box"
            type="text"
            value={!this.props.numSymbols ? "" : this.props.landCount}
            readOnly
          />
        </div>
      </div>
    );
  }
}

export default ManaBar;
