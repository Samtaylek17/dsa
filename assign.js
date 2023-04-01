function removeDuplicates(head) {
	if (!head || !head.next) {
		// if the list is empty or has only one node, there are no duplicates to remove
		return head;
	}

	let current = head; // start with the first node

	while (current) {
		let runner = current; // start a runner from the current node
		while (runner.next) {
			if (runner.next.val === current.val) {
				// if the next node has the same value as the current node, remove it
				runner.next = runner.next.next;
			} else {
				// otherwise, move the runner to the next node
				runner = runner.next;
			}
		}
		// move to the next node in the outer loop
		current = current.next;
	}

	return head;
}

/**
 * "Move a pointer k nodes into the list, then move two pointers together until the first pointer
 * reaches the end of the list."
 *
 * The above function is O(n) time and O(1) space
 * @param head - the head of the linked list
 * @param k - the kth to last element we want to find
 * @returns The kth to last element of the list.
 */
function kthToLast(head, k) {
	let p1 = head;
	let p2 = head;

	// Move p2 k nodes forward
	for (let i = 0; i < k; i++) {
		if (!p2) {
			return null; // list has fewer than k nodes
		}
		p2 = p2.next;
	}

	// Move both pointers forward until p2 reaches the end of the list
	while (p2) {
		p1 = p1.next;
		p2 = p2.next;
	}

	// p1 is now pointing to the kth to last element
	return p1;
}
