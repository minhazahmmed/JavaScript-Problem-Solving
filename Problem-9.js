function Factorial(n) {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial = i * factorial;
  }
  return factorial;
}
console.log(Factorial(5));
