function sumAmicableNum(n) {
  let sum=0
  let sumDivisorsFirst=0
  let sumDivisorsSecond=0
  let amicableNumbers=new Set();
  for(let i=1;i<n;i++)
  {
     if(amicableNumbers.has(i))
     {
       continue
     }
     for(let j=1;j<i;j++)
     {
       if(i%j==0)
       {
         sumDivisorsFirst+=j
       }
     }
     for(let m=1;m<sumDivisorsFirst;m++)
     {
       if(sumDivisorsFirst%m==0)
       {
         sumDivisorsSecond+=m
       }
     }
     if(sumDivisorsFirst!=sumDivisorsSecond && i==sumDivisorsSecond)
     {
       amicableNumbers.add(sumDivisorsFirst)
       amicableNumbers.add(sumDivisorsSecond)
     }
    sumDivisorsFirst=0
    sumDivisorsSecond=0
  }
  amicableNumbers.forEach(num=>{
    sum+=num
  })
  return sum
}

sumAmicableNum(10000);