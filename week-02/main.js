// main.js
import Stack from './stack.js';

let stack = new Stack();

console.log("Testing Stack operations:");

console.log("Initial stack:");
stack.print();

console.log("Pushing elements 5 and 8:");
stack.push(5);
stack.push(8);
stack.print();

console.log("Peek:", stack.peek());

console.log("Pop:", stack.pop());
stack.print();

console.log("Is empty?", stack.isEmpty());

console.log("Stack size:", stack.size());

console.log("Pushing more elements:");
stack.push(11);
stack.push(15);
stack.print();

console.log("Clearing stack:");
stack.clear();
stack.print();

console.log("Is empty after clear?", stack.isEmpty());

// 測試 edge case
console.log("Pop from empty stack:", stack.pop());
console.log("Peek from empty stack:", stack.peek());
