function matrixElementsSum(matrix) {
	let count = 0;

	for (let j = 0; j < matrix[0].length; j++) {
		for (let i = 0; i < matrix.length; i++) {
			if (matrix[i][j] === 0) {
				break;
			} else {
				count += matrix[i][j];
			}
		}
	}
	return count;
}
