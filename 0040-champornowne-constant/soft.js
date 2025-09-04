function digitFinder(n) {
  let theCountOfDigits = 1;
  let currentNumber = 1;
  let totalCount = 0;
  while (totalCount < n) {
    totalCount += theCountOfDigits;
    currentNumber++;
    if (currentNumber % 10 == 0) {
      theCountOfDigits++;
    }
  }
  console.log("totalCount:", totalCount);
  let digitDif = totalCount - n;
  const stringNumberArr = String(currentNumber).split("");
  console.log(stringNumberArr);
  const oneDigit = stringNumberArr[stringNumberArr.length - 1 - digitDif];
  return Number(oneDigit);
}
function champernownesConstant(n) {
  return true;
}
console.log(digitFinder(12));
