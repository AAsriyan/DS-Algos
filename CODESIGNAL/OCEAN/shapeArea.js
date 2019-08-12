function shapeArea(n) {
	if (n === 1) return 1;
	if (n === 2) return 5;
	let result = 0;

	const getFactorial = factorial(n - 2);

	result = getFactorial + (n - 1) * 4 + 1;
	return result;
}

function factorial(n) {
	let result = n;

	for (let i = 1; i <= n; i++) {
		result += n - i;
	}
	result *= 4;
	return result;
}
