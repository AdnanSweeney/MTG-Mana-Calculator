export function calculateLandsFromSymbols(numLands, blueSymbols, redSymbols, greenSymbols, blackSymbols, whiteSymbols, greySymbols) {

  let totalSymbols = blueSymbols + redSymbols + greenSymbols + blackSymbols + whiteSymbols + greySymbols;

  let numLandsJson = { blueLands: 0, redLands: 0, greenLands: 0, blackLands: 0, whiteLands: 0, greyLands: 0 }

  numLandsJson.blueLands  = Math.round(blueSymbols  * numLands / totalSymbols);
  numLandsJson.redLands   = Math.round(redSymbols   * numLands / totalSymbols);
  numLandsJson.greenLands = Math.round(greenSymbols * numLands / totalSymbols);
  numLandsJson.blackLands = Math.round(blackSymbols * numLands / totalSymbols);
  numLandsJson.whiteLands = Math.round(whiteSymbols * numLands / totalSymbols);
  numLandsJson.greyLands  = Math.round(greySymbols  * numLands / totalSymbols);

  return numLandsJson;
}