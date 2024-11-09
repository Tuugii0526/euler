function cancelDigit(nu, de) {
  const nuArray = String(nu)
    .split("")
    .map((el) => Number(el));
  const deArray = String(de)
    .split("")
    .map((el) => Number(el));
  const digitCanceledArray = [];
  for (let i = 0; i < nuArray.length; i++) {
    let theOtherNu = nuArray[nuArray.length - 1 - i];
    for (let j = 0; j < deArray.length; j++) {
      if (deArray[j] == nuArray[i]) {
        let theOtherDe = deArray[deArray.length - 1 - j];
        [theOtherNu,theOtherDe]=simplify(theOtherNu,theOtherDe)
        if (checkIfEqual(nu, de, theOtherNu, theOtherDe)) {
          digitCanceledArray.push({
            nu: theOtherNu,
            de: theOtherDe,
          });
        }
      }
    }
  }
  return digitCanceledArray;
}
function simplify(nu,de){
    for (let i = 2; i <= nu; i++) {
        while(nu%i==0 && de%i==0){
            nu/=i;
            de/=i
        }
      }
      return [nu,de]
}
function checkIfEqual(nuOri, deOri, nu, de) {
  let nuOriAssigned = nuOri;
  let deOriAssigned = deOri;
  for (let i = 2; i <= nuOriAssigned; i++) {
    while (nuOriAssigned % i == 0 && deOriAssigned % i == 0) {
      nuOriAssigned /= i;
      deOriAssigned /= i;
      if (nuOriAssigned == nu && deOriAssigned == de) {
        return true;
      }
    }
  }
  return false;
}
function isPrimeNumber(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
function digitCancellingFractions() {
  const numeratorDenominator = [];
  let lastDenominator;
  let lastNumerator
  for (let d = 11; d < 100; d++) {
    for (let n = 10; n < d; n++) {
      if (d % 10 == 0 && n % 10 == 0) {
        continue;
      }
      numeratorDenominator.push(...cancelDigit(n, d));
    }
  }
   lastNumerator=numeratorDenominator.reduce((acc,cur)=>acc*cur.nu,1)
   lastDenominator=numeratorDenominator.reduce((acc,cur)=>acc*cur.de,1)
  let lastResult=simplify(lastNumerator,lastDenominator)
  return lastResult[1]
}
console.log(digitCancellingFractions());
//16/64, 19/95, 26/65, and 49/98
