const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];

const containsCommonItems = (arr1, arr2) => {
	let hashMap = {};
	for (let i = 0; i < arr1.length; i++) {
		if (!hashMap[arr1[i]]) {
			const item = arr1[i];
			hashMap[item] = true;
		}
	}
	console.log(hashMap);
	for (let j = 0; j < arr2.length; j++) {
		if (hashMap[arr2[j]]) {
			return true;
		}
	}
	return false;
};

// containsCommonItems(array1, array2)

const containsCommonItems2 = (arr1, arr2) => {
	return arr1.some(item => arr2.includes(item));
};

containsCommonItems2(array1, array2);
