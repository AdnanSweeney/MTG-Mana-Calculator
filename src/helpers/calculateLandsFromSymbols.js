export function calculateLandsFromSymbols(numLands, blueSymbols, redSymbols, greenSymbols, blackSymbols, whiteSymbols, greySymbols) {

	let totalSymbols = blueSymbols + redSymbols + greenSymbols + blackSymbols + whiteSymbols + greySymbols;


	// Initialize return object containing suggested land counts
	let numLandsJson = { blueLands: 0, redLands: 0, greenLands: 0, blackLands: 0, whiteLands: 0, greyLands: 0 }

	if (totalSymbols !== 0) {

		// Populate land count object by looking at total land count to symbol count ratios
		numLandsJson.blueLands  = Math.round(blueSymbols  * numLands / totalSymbols);
		numLandsJson.redLands   = Math.round(redSymbols   * numLands / totalSymbols);
		numLandsJson.greenLands = Math.round(greenSymbols * numLands / totalSymbols);
		numLandsJson.blackLands = Math.round(blackSymbols * numLands / totalSymbols);
		numLandsJson.whiteLands = Math.round(whiteSymbols * numLands / totalSymbols);
		numLandsJson.greyLands  = Math.round(greySymbols  * numLands / totalSymbols);

		// To make sure the sum of rounded numbers doesn't exceed land count in deck, subtract
		// from the most populous land type required until the land count in deck is reached
		let newSum = 0
		let mostLandCount = 0
		let leastLandCount = Infinity
		let mostLandType = ""
		let leastLandType = ""
		
		// Parse the JSON object to find the highest and lowest used non-zero mana symol
		for(const landType in numLandsJson) {

			newSum += numLandsJson[landType]

			if (numLandsJson[landType] > mostLandCount) {

				mostLandCount = numLandsJson[landType]
				mostLandType = landType

			} else if (numLandsJson[landType] != 0 && numLandsJson[landType] < leastLandCount) {

				leastLandCount = numLandsJson[landType]
				leastLandType = landType
			}
		}

		// Adjust the JSON property values until the total of rounded numbers matches # of lands in the deck
		while (newSum != numLands) {

			// Incrementally reduce the number of lands for the most used mana symbol by 1 if the sum is too high
			if (newSum > numLands) {

				numLandsJson[mostLandType]--
				newSum--
			
			// Incrementally increase the number of lands for the least used mana symbol by 1 if the sum is too low
			} else if (newSum < numLands) {

				numLandsJson[leastLandType]++
				newSum++
			}
		}
	}

	return numLandsJson;
}