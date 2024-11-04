function isPrime(n)
{
  let boundary=n
  for(let i=2;i<boundary;i++)
  {
    if(n%i==0)
    {
      return false
    }
    else
    {
      boundary=n/i
    }
  }
  return true
}

function primeSummation(n) {
    let sum=0
    for(let i=2;i<n;i++)
    {
      if(isPrime(i))
      {
        sum+=i
      }
    }
    return sum
  }
  