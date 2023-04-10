const { sumListReverse, LinkedList } = require('./linked-list');

// const ll = LinkedList.fromValues(3, 5, 8, 5, 10, 2, 1);
const ll = LinkedList.fromValues('A', 'B', 'C', 'D', 'E', 'C');
// const ll = LinkedList.fromValues(1, 2, 10, 5, 8, 5, 3);
// const ll = LinkedList.fromValues(10, 20, 30, 40);
// const num1 = LinkedList.fromValues(7, 1, 6);
// const num2 = LinkedList.fromValues(5, 9, 2);

// num1.print();
// num2.print();
ll.print();
console.log(ll.circularList());
// const sum = sumListReverse(num1, num2);
// console.log(sum);

// ll.print();

// console.log(ll.getByIndex(0).value);
