function centuryFromYear(year) {
	const strYear = year.toString();
	const length = strYear.length;
	let result = '';

	switch (length) {
		case 4:
			result += strYear[0];
			result += strYear[1];
			result = parseInt(result);

			if (strYear[2] !== '0' || strYear[3] !== '0') {
				result += 1;
			}

			break;
		case 3:
			result += strYear[0];
			result = parseInt(result);

			if (strYear[1] !== '0' || strYear[2] !== '0') {
				result += 1;
			}

			break;
		default:
			result = 1;
			break;
	}
	return result;
}
