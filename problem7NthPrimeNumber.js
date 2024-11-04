function isPrimeNumber(n)
{
  for(let i=2;i<n;i++)
  {
    if(n%i===0)
    {
      return false
    }
  }
  return true
}
function nthPrime(n) {
 let counter=0
 let i;
 for( i=2;counter<n;i++)
 {
   if(isPrimeNumber(i))
   {
     counter+=1
   }
 }
 return i-1
}

nthPrime(10001);