function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}
function getPermutations(numberArray) {
  if (numberArray.length == 1) {
    return numberArray;
  }
  const permutations = [];
  for (let i = 0; i < numberArray.length; i++) {
    let currNumber = numberArray[i];
    const remainingNumbers = numberArray.filter(
      (number,index) => index != i
    );
    const subPermutations= getPermutations(remainingNumbers)
    subPermutations.forEach(permu=>{
      permutations.push(`${currNumber}${permu}`)
    })
  }
  return permutations
}
function isAllPermutationsPrime(number) {
  const numberStringArray=String(number).split('')
  const uniquePermutations=Array.from(new Set(getPermutations(numberStringArray)),(stringNumber)=>Number(stringNumber))
for(let i=0;i<uniquePermutations.length;i++)
{
  if(!isPrime(uniquePermutations[i]))
  {
    return [false]
  }
}
return [true,uniquePermutations]
}
function circularPrimes(n) {
  const circularPrimesSet=new Set()
  for(let i=2;i<n;i++)
  {
    if(isPrime(i) && !circularPrimesSet.has(i))
    {
      const booleanAndCirculations=isAllPermutationsPrime(i)
      if(booleanAndCirculations[0])
      {
        circularPrimesSet.add(...booleanAndCirculations[1])
      }
    }
  }
  return Array.from(circularPrimesSet)
}

console.log(circularPrimes(100000))
