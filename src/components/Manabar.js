import React from 'react';
import logo from '../logo.svg';
import '../App.css';

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

			<div className={"Flex-row " + this.props.colour + "RowClass " + this.getActiveClassName()}>

				<div className="Flex-item Flex-mana-logo">
					<img src={logo} className="Mana-logo" alt="logo" />
				</div>

				<div className="Flex-item">
					<input id={this.props.colour} type="number" onChange={this.props.onNumSymbolsChange} className="Text-box" />
				</div>

				<div className="Flex-item">
					<input className="Text-box" type="text" value={!this.props.landCount ? "" : this.props.landCount} readOnly />
				</div>

			</div>
		);
	}
}

export default ManaBar;
