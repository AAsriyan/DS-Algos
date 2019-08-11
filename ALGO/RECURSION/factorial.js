// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

// 1. find base case
// 2. find recursive case
// 3. find return value
function findFactorialRecursive(number) {
	if (number <= 2) return number;

	return number * findFactorialRecursive(number - 1);
}

// iterative
function findFactorialIterative(number) {
	let answer = number;

	for (let i = number - 1; i > 0; i--) {
		answer = answer * i;
	}
	return answer;
}

//findFactorialIterative(4)
findFactorialRecursive(2);
