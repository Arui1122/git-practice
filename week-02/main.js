// main.js
import Stack from './stack.js';
let stack = new Stack();
console.log("Testing Stack operations:");  // Testing Stack operations:
console.log("Initial stack:");  // Initial stack:
stack.print();  // (空行輸出)
console.log("Pushing elements 5 and 8:");  // Pushing elements 5 and 8:
stack.push(5);
stack.push(8);
stack.print();  // 5,8
console.log("Peek:", stack.peek());  // Peek: 8
console.log("Pop:", stack.pop());  // Pop: 8
stack.print();  // 5
console.log("Is empty?", stack.isEmpty());  // Is empty? false
console.log("Stack size:", stack.size());  // Stack size: 1
console.log("Pushing more elements:");  // Pushing more elements:
stack.push(11);
stack.push(15);
stack.print();  // 5,11,15
console.log("Clearing stack:");  // Clearing stack:
stack.clear();
stack.print();  // (空行輸出)
console.log("Is empty after clear?", stack.isEmpty());  // Is empty after clear? true
// 測試 edge case
console.log("Pop from empty stack:", stack.pop());  // Pop from empty stack: Stack is empty
console.log("Peek from empty stack:", stack.peek());  // Peek from empty stack: Stack is empty
