function isPrime(n) {
  if (n == 1) {
    return false;
  }
  if ((n == 2) | (n == 3)) {
    return true;
  }
  if (n % 6 !== 1 && n % 6 !== 5) {
    return false;
  }
  return determinePrime(n);
}

function determinePrime(n) {
  const limit = Math.sqrt(n);
  for (let i = 5; i <= limit; i += 2) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function isTruncatablePrime(n) {
  const stringNum = String(n);
  for (let i = 1; i <= stringNum.length; i++) {
    if (!isPrime(Number(stringNum.slice(0, i)))) {
      return false;
    }
    if (!isPrime(Number(stringNum.slice(-i)))) {
      return false;
    }
  }
  return true;
}
function truncatablePrimes(n) {
  const numbers = [];
  for (let i = 11; numbers.length < n; i += 2) {
    if (isTruncatablePrime(i)) {
      numbers.push(i);
    }
  }
  return numbers.reduce((acc, i) => acc + i, 0);
}
console.time("time");
console.log(truncatablePrimes(11));
console.timeEnd("time");
