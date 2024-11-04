function isPrimeNumber(number)
{
  for (let i=2;i<number;i++)
  {
    if(number%i===0)
    {
      return false
    }
  }
    return true
}
function largestPrimeFactor(number) {
let largestPrimeFactor;
for(let i=2;i<=number;i++)
{
  if(isPrimeNumber(i) && number%i==0)
  {
    largestPrimeFactor=i
    while(number%i==0)
    {
      number/=i
    }
  }
}
 return largestPrimeFactor; 
}