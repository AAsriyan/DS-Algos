function almostIncreasingSequence(sequence) {
	if (sequence.length <= 2) return true;
	let a = sequence[0];
	let b = sequence[1];
	let drops = 0;
	if (a >= b) {
		drops++;
		a = b - 1; //drop a, keeping the smallest, fake a value for the first loop
	}
	// consider 3 items at a time, a, b & c
	for (let i = 2; i < sequence.length; i++) {
		let c = sequence[i];
		if (a < b && b < c) {
			// all good, move on
			a = b;
			b = c;
			continue;
		}
		// we'll have to drop one of them
		drops++;
		if (drops > 1) return false;
		// which one will we drop, b or c?
		if (a < c) {
			// drop b (a,b -> a,c)
			b = c;
		} // else drop c (a,b -> a,b)
	}
	return true;
}
