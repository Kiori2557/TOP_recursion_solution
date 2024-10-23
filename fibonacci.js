function fibonacciRecursive(num) {
  if (num <= 2) return num;
  else return fibonacci(num - 1) + fibonacci(num - 2);
}
function fibonacci(num) {
  let num1 = 0;
  let num2 = 1;
  let result;
  for (let i = 0; i < num; i++) {
    result = num1 + num2;
    num1 = num2;
    num2 = result;
  }
  return result;
}

console.log(fibonacci(2));
