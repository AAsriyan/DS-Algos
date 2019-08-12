function checkPalindrome(inputString) {
	const length = inputString.length;
	for (let i = 1; i <= length; i++) {
		if (inputString[i - 1] === inputString[length - i]) {
			continue;
		} else {
			return false;
		}
	}
	return true;
}
