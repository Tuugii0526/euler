function pandigitalMultiples(k) {
  let strDigits = "";
  const possibleNums = [];
  let currentMultiplyingNum = 1;
  const checkSet = new Set();
  for (let i = 1; i < 10000; i++) {
    strDigits = "";
    currentMultiplyingNum = 1;
    while (strDigits.length < k) {
      strDigits += String(currentMultiplyingNum * i);
      currentMultiplyingNum++;
    }
    if (strDigits.length == k) {
      const numDigits = strDigits.split("").map((s) => Number(s));
      numDigits.forEach((num) => {
        checkSet.add(num);
      });
      if (checkSet.size == k) {
        possibleNums.push(strDigits);
      }
    }
    checkSet.clear();
  }
  const notZeroIncludesNumbs = possibleNums
    .filter((num) => !num.includes("0"))
    .map((str) => Number(str));
  return Math.max(...notZeroIncludesNumbs);
}

console.log("maxNum:", pandigitalMultiples(9));
