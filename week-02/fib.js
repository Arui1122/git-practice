function fib(n) {
  if (n <= 1) return n;
  
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  
  return b;
}

// Test cases
console.log(fib(0));  // 0
console.log(fib(1));  // 1
console.log(fib(5));  // 5
console.log(fib(10)); // 55
