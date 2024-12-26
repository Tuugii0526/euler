function isPrime(number) {
  if (number == 1) {
    return false;
  }
  if (number == 2 || number == 3) {
    return true;
  }
  const sixMod = number % 6;
  if (sixMod !== 5 && sixMod !== 1) {
    return false;
  }
  return determineIsPrime(number);
}
function determineIsPrime(number) {
  const limit = Math.sqrt(number);
  for (let i = 3; i <= limit; i += 2) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}
function getPermutations(n) {
  const primesSet = new Set();
  primesSet.add(n);

  const primeStr = `${n}`;
  for (let i = 1; i < primeStr.length; i++) {
    const rotatedPrimeStr = primeStr.substring(i) + primeStr.substring(0, i);
    const rotatedPrime = parseInt(rotatedPrimeStr);
    if (!isPrime(rotatedPrime)) {
      return [];
    }
    primesSet.add(rotatedPrime);
  }

  return Array.from(primesSet);
}

function isAllPermutationsPrime(number) {
  const uniquePermutations = getPermutations(String(number));
  for (let i = 0; i < uniquePermutations.length; i++) {
    if (!isPrime(uniquePermutations[i])) {
      return [false];
    }
  }
  return [true, uniquePermutations];
}
function circularPrimes(n) {
  const circularPrimesSet = new Set();
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      if (!circularPrimesSet.has(i)) {
        const booleanAndCirculations = isAllPermutationsPrime(i);
        if (booleanAndCirculations[0]) {
          circularPrimesSet.add(...booleanAndCirculations[1]);
        }
      }
    }
  }
  return circularPrimesSet.size;
}
