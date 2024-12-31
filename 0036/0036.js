function isBoth(num) {
  if (is10Pal(num) && is2Pal(binaryConverter(num))) {
    return true;
  }
  return false;
}

function is10Pal(num) {
  const stringNum = String(num);
  const length = stringNum.length;
  const limit = Math.floor(stringNum.length / 2);
  for (let i = 0; i < limit; i++) {
    if (stringNum[i] !== stringNum[length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function is2Pal(stringNum) {
  const length = stringNum.length;
  const limit = Math.floor(stringNum.length / 2);
  for (let i = 0; i < limit; i++) {
    if (stringNum[i] !== stringNum[length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function binaryConverter(num) {
  if (num == 0 || num == 1) {
    return `${num}`;
  }
  const quotient = Math.floor(num / 2);
  const remainder = num % 2;
  const subRemainder = binaryConverter(quotient);
  return `${subRemainder}${remainder}`;
}
function doubleBasePalindromes(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (isBoth(i)) {
      sum += i;
    }
  }
  return sum;
}
