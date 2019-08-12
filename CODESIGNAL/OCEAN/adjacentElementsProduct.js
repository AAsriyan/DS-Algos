function adjacentElementsProduct(inputArray) {
	let largest = -1000;
	const length = inputArray - 1;

	for (let i = 0; i < inputArray.length; i++) {
		if (inputArray[i] * inputArray[i + 1] > largest) {
			largest = inputArray[i] * inputArray[i + 1];
		}
	}

	return largest;
}
