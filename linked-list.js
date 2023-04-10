class LinkedList {
	constructor() {
		this.head = null;
		this.length = 0;
	}

	insertAtHead(data) {
		const newNode = new LinkedListNode(data, this.head);
		this.head = newNode;
		this.length++;
	}

	getByIndex(index) {
		if (index < 0 || index >= this.length) return null;

		let current = this.head;
		for (let i = 0; i < index; i++) {
			current = current.next;
		}
		return current;
	}

	removeHead() {
		this.head = this.head.next;
		this.length--;
	}

	insertAtIndex(index, value) {
		if (index === 0) return this.insertAtHead(value);
		const prev = this.getByIndex(index - 1);
		if (prev === null) return null;

		prev.next = new LinkedListNode(value, prev.next);
		this.length++;
	}

	removeAtIndex(index) {
		if (index === 0) return this.removeHead();
		const prev = this.getByIndex(index - 1);
		if (prev === null) return null;
		prev.next = prev.next.next;
		this.length--;
	}

	/**
	 * We iterate through the linked list, inserting each node into either the "before" or "after"
	 * partition.
	 *
	 * The "before" partition starts with a null value, and the "after" partition also starts with a null
	 * value.
	 *
	 * We create four variables to keep track of the start and end of the before and after partitions.
	 *
	 * We also create a variable called node and initialize it to the current head of the linked list.
	 *
	 * We then enter a while loop that runs as long as node is not null.
	 *
	 * Inside the while loop, we create a variable called nextNode and initialize it to the next property
	 * of the current node.
	 *
	 * We then set the next property of the current node to null.
	 *
	 * This is important because we're about to insert the current node into either the "before" or
	 * "after" partition.
	 *
	 * If we don't set the next property to null,
	 * @param value - the value to partition the list around
	 * @returns A new linked list with all the values less than the value passed in to the function at the
	 * beginning of the list and all the values greater than or equal to the value passed in to the
	 * function at the end of the list.
	 */
	partition(x) {
		let beforeStart = null;
		let beforeEnd = null;
		let afterStart = null;
		let afterEnd = null;
		let equalStart = null;
		let equalEnd = null;

		let node = this.head;

		while (node !== null) {
			if (node.value < x) {
				/* This is checking if the beforeStart is null. If it is, then we set the beforeStart to the node.
				We also set the beforeEnd to the beforeStart. If the beforeStart is not null, then we set the
				beforeEnd.next
				to the node and set the beforeEnd to the node. */
				if (beforeStart === null) {
					beforeStart = node;
					beforeEnd = beforeStart;
				} else {
					beforeEnd.next = node;
					beforeEnd = node;
				}
			} else if (node.value === x) {
				/* This is checking if the beforeStart is null. If it is, then we set the beforeStart to the node.
				We also set the beforeEnd to the beforeStart. If the beforeStart is not null, then we set the
				beforeEnd.next
				to the node and set the beforeEnd to the node. */
				if (equalStart === null) {
					equalStart = node;
					equalEnd = equalStart;
				} else {
					equalEnd.next = node;
					equalEnd = node;
				}
			} else {
				/* This is checking if the afterStart is null. If it is, then we set the afterStart to the node.
				We also set the afterEnd to the afterStart. If the afterStart is not null, then we set the
				afterEnd.next
				to the node and set the afterEnd to the node. */
				if (afterStart === null) {
					afterStart = node;
					afterEnd = afterStart;
				} else {
					afterEnd.next = node;
					afterEnd = node;
				}
			}
			node = node.next;
		}

		if (beforeStart === null) {
			if (equalStart === null) {
				return afterStart;
			} else {
				equalEnd.next = afterStart;
				return equalStart;
			}
		}

		if (equalStart === null) {
			beforeEnd.next = afterStart;
		} else {
			beforeEnd.next = equalStart;
			equalEnd.next = afterStart;
		}

		if (afterStart !== null) {
			afterEnd.next = null;
		}

		return beforeStart;
	}

	// circularList() {
	// 	let node = this.head;
	// 	if (!node || !node.next) {
	// 		return null;
	// 	}

	// 	let slow = node.next;
	// 	console.log(slow);
	// 	let fast = node.next.next;

	// 	while (fast && fast.next && slow !== fast) {
	// 		slow = slow.next;
	// 		fast = fast.next.next;
	// 	}

	// 	if (!fast || !fast.next) {
	// 		return null;
	// 	}

	// 	slow = node;

	// 	while (slow !== fast) {
	// 		slow = slow.next;
	// 		fast = fast.next;
	// 	}

	// 	console.log(slow);

	// 	return slow;
	// }

	circularList() {
		let node = this.head;
		if (!node || !node.next) {
			return null;
		}

		let visited = new Set();
		let current = node;

		while (current) {
			if (visited.has(current)) {
				return current;
			}
			visited.add(current);

			if (current.next) {
				current = current.next;
				console.log(current);
			}
		}

		return null;
	}

	print() {
		let output = '';
		let current = this.head;
		while (current) {
			output = `${output}${current.value} -> `;
			current = current.next;
		}
		console.log(`${output}null`);
	}
}

/**
 * We reverse the linked lists, convert them to numbers, add them, convert the sum to a string, split
 * the string into an array, and then create a new linked list from the array
 * @param num1 - a linked list of numbers
 * @param num2 - 7 -> 1 -> 6
 * @returns A linked list with the sum of the two input linked lists.
 */
function sumListReverse(num1, num2) {
	let current1 = num1.head;
	let current2 = num2.head;
	let outputNum1 = [];
	let outputNum2 = [];

	while (current1 && current2) {
		outputNum1.push(current1.value);
		current1 = current1.next;
		outputNum2.push(current2.value);
		current2 = current2.next;
	}

	const digit1 = parseInt(outputNum1.reverse().join(''));
	const digit2 = parseInt(outputNum2.reverse().join(''));

	const sum = digit1 + digit2;
	const sumArr = sum.toString().split('').map(Number);

	return LinkedList.fromValues(...sumArr);
}

class LinkedListNode {
	constructor(value, next) {
		this.value = value;
		this.next = next;
	}
}

LinkedList.fromValues = function (...values) {
	const ll = new LinkedList();
	for (let i = values.length - 1; i >= 0; i--) {
		ll.insertAtHead(values[i]);
	}
	return ll;
};

module.exports = { LinkedList, sumListReverse };
