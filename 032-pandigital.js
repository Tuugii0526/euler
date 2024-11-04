function pandigitalProducts(n) {
  let sum = [];
  const productDigit = Math.floor(n / 2);
  const start = 10 ** (productDigit - 1);
  const limit = Number(Array.from({ length: productDigit }, (_) => 9).join(""));
  const choices = Array.from({ length: n }, (_, i) => i + 1);
  const allPossibilities = [];
  let allPosibilitiesCounter = productDigit;
  while (allPosibilitiesCounter >= 1) {
    allPossibilities.push(...eNumN(allPosibilitiesCounter, choices));
    allPosibilitiesCounter--;
  }
  for (let i = start; i <= limit; i++) {
    if (new Set(Array.from(String(i).split(""))).size !== productDigit) {
      continue;
    }
    for (let j = 0; j < allPossibilities.length; j++) {
      const numberPos = Number(allPossibilities[j]);
      if (i % numberPos == 0) {
        const allString =
          String(i) + allPossibilities[j] + String(i / numberPos);
        if (new Set(Array.from(allString)).size == n && allString.length == n) {
          const checkSet = new Set(Array.from(allString));
          choices.forEach((ch) => {
            checkSet.add(String(ch));
          });
          if (checkSet.size == n) {
            sum.push(i);
            continue;
          }
        }
      }
    }
  }
  return Array.from(new Set(sum)).reduce((a, b) => a + b, 0);
}
function eNumN(num, choices) {
  if (num === 1) {
    return choices.map((choice) => `${choice}`);
  }
  const enumContainer = [];
  for (let i = 0; i < choices.length; i++) {
    const choice = choices[i];
    const rmChoices = choices.filter((ch) => ch !== choice);
    const subEnumN = eNumN(num - 1, rmChoices);
    subEnumN.forEach((str) => {
      enumContainer.push(`${choice}${str}`);
    });
  }
  return enumContainer;
}
console.time('time')
pandigitalProducts(9) //418ms
console.timeEnd('time')
