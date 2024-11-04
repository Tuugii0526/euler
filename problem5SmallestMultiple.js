function isPrimeNumber(number)
{
  for(let i=2;i<number;i++)
  {
    if(number%i===0)
    {
      return false
    }

  }
  return true
}
function arrayElementsMultiple(array,index)
{
  if(index<=0)
  {
    return array[0]
  }
  else
  {
    return array[index]*arrayElementsMultiple(array,index-1)
  }
}
function smallestMult(n) {
 const primeNumbers=[]
 for(let i=2;i<=n;i++)
 {
   let currentI=i
   if(isPrimeNumber(i))
   {
     primeNumbers.push(i)
   }
   else
   {
     
     for(let j=0;j<primeNumbers.length;j++)
     {
       
       if(currentI%primeNumbers[j]===0 )
       {
         currentI/=primeNumbers[j]
       }
      
     }
     if(currentI===1)
     {
       continue
     }
     let currentIAfter=currentI
     for(let m=2;m<=currentIAfter;m++)
     {
       if(isPrimeNumber(m) && currentI%m===0)
       {
         currentI/=m
         primeNumbers.push(m)
       }
       if(currentI===1)
       {
         break
       }
     }
     
   }
 }
 return arrayElementsMultiple(primeNumbers,primeNumbers.length-1)
}