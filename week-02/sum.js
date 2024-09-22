// 方法 1: 使用 reduce
function sum1(ary) {
  return ary.reduce((acc, cur) => acc + cur, 0);
}

// 方法 2: 使用 recursion
function sum2(ary) {
  if (ary.length === 0) return 0;
  return ary[0] + sum2(ary.slice(1));
}

// 方法 3: 使用 reduce 和 spread operator
const sum3 = ary => [...ary].reduce((a, b) => a + b);

// 測試
console.log(sum1([1, 5, 3, 2])); // 11
console.log(sum2([1, 5, 3, 2])); // 11
console.log(sum3([1, 5, 3, 2])); // 11

// 挑戰題: 計算 1 到 n 的和
function sumToN(n) {
  if (n <= 1) return n;
  return n + sumToN(n - 1);
}

// 另一種方法：使用高斯公式
const sumToNGauss = n => (n * (n + 1)) / 2;

console.log(sumToN(5));     // 15
console.log(sumToNGauss(5)); // 15
