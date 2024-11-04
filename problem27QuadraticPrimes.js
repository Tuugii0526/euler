function isPrime(num){
    if(num<=0)
    {
      return false
    }
    for(let i=2;i<num;i++)
    {
      if(num%i==0)
      {
        return false
      }
    }
    return true
  }
  function getValue(i,j,n){
  
  }
  function quadraticPrimes(range) {
  let maxPrimes=0
  let product=0
  for(let i=-(range-1);i<range;i++)
  {
    for(let j=-(range);j<=range;j++)
    {
      let n=0
      while(isPrime(n*n+i*n+j))
      {
      n++
      }
      if(n>maxPrimes)
      {
        maxPrimes=n
        product=i*j
      }
    }
  }
  return product
  }
  
  quadraticPrimes(1000);