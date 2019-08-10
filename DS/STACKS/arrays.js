class Stack {
	constructor() {
		this.storage = [];
	}

	peek() {
		return this.storage[this.storage.length - 1];
	}

	push(value) {
		this.storage.push(value);
		return this;
	}

	pop() {
		return this.storage.pop();
	}

	isEmpty() {
		return this.storage.length === 0;
	}
}

const myStack = new Stack();
myStack.push('Ebay');
myStack.push('Google');
myStack.pop();
myStack.storage;
