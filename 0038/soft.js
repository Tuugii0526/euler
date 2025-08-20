function pandigitalMultiples(k) {
  let strDigits = "";
  const possibleNums = [];
  let currentMultiplyingNum = 1;
  const checkSet = new Set();
  for (let i = 1; i < 10000; i++) {
    strDigits = "";
    currentMultiplyingNum = 1;
    while (strDigits.length < 10) {
      strDigits += String(currentMultiplyingNum * i);
      currentMultiplyingNum++;
    }
    if (strDigits.length != 9) {
      checkSet.clear();
    } else {
      const numDigits = strDigits.split("").map((s) => Number(s));
      numDigits.forEach((num) => {
        checkSet.add(num);
      });
      if (checkSet.size == 9) {
        possibleNums.push(Number(strDigits));
        checkSet.clear();
      }
    }
  }
  return true;
}

pandigitalMultiples(8);
