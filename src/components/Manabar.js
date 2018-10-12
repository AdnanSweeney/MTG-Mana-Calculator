import React from 'react';
import logo from '../logo.svg';
import '../App.css';

class ManaBar extends React.Component {

	render() {

		return (

			<div className={"Flex-row " + this.props.colour + "RowClass"}>

				<div className="Flex-item Flex-mana-logo">
					<img src={logo} className="Mana-logo" alt="logo" />
				</div>

				<div className="Flex-item">
					<input id={this.props.colour} type="number" onChange={this.props.onNumSymbolsChange} className="Text-box" />
				</div>

				<div className="Flex-item">
					<input className="Text-box" type="text" readOnly />
				</div>

			</div>
		);
	}
}

export default ManaBar;
