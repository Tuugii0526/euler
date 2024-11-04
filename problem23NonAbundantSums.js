function sumOfNonAbundantNumbers(n) {
  const abundantNumbers=getAbundantNumbers(n)
  const sumOfTwoAbundantNumbers=[]
  let sumOfNonAbundantSums=0
  for(let i=0;i<abundantNumbers.length;i++)
  {
    for(let j=i;j<abundantNumbers.length;j++)
    { 
      sumOfTwoAbundantNumbers.push(abundantNumbers[i]+abundantNumbers[j])
    }
  }
  const noReplicaSumTwo=[...new Set(sumOfTwoAbundantNumbers)]
  noReplicaSumTwo.sort((a,b)=>a-b)
  let startingIndex=0
  let lengthOfSumOfTwoNum=noReplicaSumTwo.length
for(let i=1;i<=n;i++)
{
  if(i<noReplicaSumTwo[startingIndex] )
   {
     sumOfNonAbundantSums+=i
   }
   else{
     if(startingIndex+1>lengthOfSumOfTwoNum-1)
     { 
       
          for(let j=noReplicaSumTwo[lengthOfSumOfTwoNum-1]+1;j<=n;j++)
          {
           sumOfNonAbundantSums+=j
          }
          break;
     }
     else
     {
       startingIndex+=1
     }
   }
}
return sumOfNonAbundantSums
  }



  function getAbundantNumbers(n){
  const abundantNumbers=[]
  for(let i=2;i<=n;i++)
  {
   if(ifAbundantNumber(i))
   {
     abundantNumbers.push(i)
   }
  }
  return abundantNumbers
  }
  function ifAbundantNumber(number)
  {    const originalNumber=number
      let sum=1
      for(let i=2;i<number;i++)
      {
           if(originalNumber%i==0)
           {
             sum+=i
             if(i!==originalNumber/i)
             {
             sum+=originalNumber/i
             }
             number=originalNumber/i
           }
      }
      if(sum>originalNumber)
      {
        return true
      }
      return false
  }
console.log(  sumOfNonAbundantNumbers(10000));