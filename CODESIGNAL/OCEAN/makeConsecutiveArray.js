function makeArrayConsecutive2(statues) {
	let smallest = statues[0];
	let largest = statues[0];
	let counter = 0;
	const set = new Set();

	for (let i = 0; i < statues.length; i++) {
		if (statues[i] < smallest) {
			smallest = statues[i];
		}

		if (statues[i] > largest) {
			largest = statues[i];
		}

		if (!set.has(statues[i])) {
			set.add(statues[i]);
		}
	}

	for (let i = smallest + 1; i < largest; i++) {
		if (!set.has(i)) {
			counter++;
		}
	}
	console.log(counter);
	console.log(largest);
	console.log(smallest);
	console.log(set);
	return counter;
}
