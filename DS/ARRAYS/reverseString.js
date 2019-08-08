function reverse(str) {
	// check input
	if (!str || str.length < 2 || typeof str !== 'string') {
		return 'Error: wrong input';
	}
	const strArray = str.split('');
	const reversedString = [];

	for (let i = 1; i <= strArray.length; i++) {
		reversedString.push(strArray[strArray.length - i]);
	}

	return reversedString.join('');
}

reverse('Hello');
