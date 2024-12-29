function isPrimeNumber(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
function largestPrimeFactor(number) {
  let largestPrimeFactor;
  for (let i = 2; i <= number; i++) {
    if (number % i == 0 && isPrimeNumber(i)) {
      largestPrimeFactor = i;
      while (number % i == 0) {
        number /= i;
      }
    }
  }
  return largestPrimeFactor;
}
console.time("time");
console.log(largestPrimeFactor(600851475143));
console.timeEnd("time");
