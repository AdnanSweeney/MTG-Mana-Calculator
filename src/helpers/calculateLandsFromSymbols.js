export function calculateLandsFromSymbols(numLands, blueSymbols, redSymbols, greenSymbols, blackSymbols, whiteSymbols, greySymbols) {

  let numLandsJson = { blueLands: 0, redLands: 0, greenLands: 0, blackLands: 0, whiteLands: 0, greyLands: 0 }

  let totalSymbols = blueSymbols + redSymbols + greenSymbols + blackSymbols + whiteSymbols + greySymbols;

  if (totalSymbols !== 0) {

  	numLandsJson.blueLands  = (blueSymbols  * numLands / totalSymbols).toFixed(2);
	numLandsJson.redLands   = (redSymbols   * numLands / totalSymbols).toFixed(2);
	numLandsJson.greenLands = (greenSymbols * numLands / totalSymbols).toFixed(2);
	numLandsJson.blackLands = (blackSymbols * numLands / totalSymbols).toFixed(2);
	numLandsJson.whiteLands = (whiteSymbols * numLands / totalSymbols).toFixed(2);
	numLandsJson.greyLands  = (greySymbols  * numLands / totalSymbols).toFixed(2);

  }
  
  return numLandsJson;
}