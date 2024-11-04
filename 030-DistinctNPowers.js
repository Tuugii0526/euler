// Problem 30: Digit n powers
// Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

// 1634 = 14 + 64 + 34 + 44
// 8208 = 84 + 24 + 04 + 84
// 9474 = 94 + 44 + 74 + 44
// As 1 = 14 is not a sum it is not included.

// The sum of these numbers is 1634 + 8208 + 9474 = 19316.

// Find the sum of all the numbers that can be written as the sum of n powers of their digits.
function digitnPowers(n) {
    let sum=0
    const limit=10**(n+1)
    for(let i=2;i<limit;i++)
    {
      if(isNumberEqualToDigitsPower(n,i))
      {
        sum+=i
      }
    }
    return sum;
  }
  function isNumberEqualToDigitsPower(power,number){
    const digits=Array.from(`${number}`).map(n=>parseInt(n))
    const digitPowerSum=digits.reduce((acc,digit)=>acc+digit**power,0)
    return digitPowerSum===number
  }
  digitnPowers(5);