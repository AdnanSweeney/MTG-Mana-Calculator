export function calculateLandsFromSymbols(numLands, blueSymbols, redSymbols, greenSymbols, blackSymbols, whiteSymbols, greySymbols) {

	let totalSymbols = blueSymbols + redSymbols + greenSymbols + blackSymbols + whiteSymbols + greySymbols;


	// Initialize return object containing suggested land counts
	let numLandsJson = { blueLands: 0, redLands: 0, greenLands: 0, blackLands: 0, whiteLands: 0, greyLands: 0 }

	if (totalSymbols !== 0) {

		// Populate land count object by looking at total land count to symbol count ratios
		numLandsJson.blueLands  = parseFloat((blueSymbols  * numLands / totalSymbols).toFixed(2));
		numLandsJson.redLands   = parseFloat((redSymbols   * numLands / totalSymbols).toFixed(2));
		numLandsJson.greenLands = parseFloat((greenSymbols * numLands / totalSymbols).toFixed(2));
		numLandsJson.blackLands = parseFloat((blackSymbols * numLands / totalSymbols).toFixed(2));
		numLandsJson.whiteLands = parseFloat((whiteSymbols * numLands / totalSymbols).toFixed(2));
		numLandsJson.greyLands  = parseFloat((greySymbols  * numLands / totalSymbols).toFixed(2));

	}

	return numLandsJson;
}