function sumByDigit(currenSumString,totalSumString){
  const currentSumArray=currenSumString.split('').map(num=>Number(num))
  const totalSumArray=totalSumString.split('').map(num=>Number(num))
  for(let i=0;i<currentSumArray.length;i++)
  {
    let oneColumnSum= String(totalSumArray[i]+currentSumArray[i])
    let currentI=i
    while(oneColumnSum.length>1)
    {
      totalSumArray[currentI]=oneColumnSum[1]
      currentI++
      if(totalSumArray[currentI]===undefined)
      {
        totalSumArray[currentI]=0
      }
      oneColumnSum=String(totalSumArray[currentI]+Number(oneColumnSum[0]))
    }
    totalSumArray[currentI]=Number(oneColumnSum[0])
  }
  return totalSumArray.join('')
  }
  function sumFactorialDigits(n) {
  let totalSum='1';
  let currentSum='0';
   for(let i=2;i<=n;i++)
   {
     currentSum = totalSum
     for(let j=2;j<=i;j++)
     {
       totalSum=sumByDigit(currentSum,totalSum)
     }
   }
   return totalSum.split('').map(num=>Number(num)).reduce((acc,el)=>acc+el,0)
  }
  