function powerDigitSum(exponent) {
    let sum='1';
    let tempSum='';
    let increment=''
    for(let i=1;i<=exponent;i++)
    {
      for(let j=0;j<sum.length;j++)
      {
          let oneColumnSum=String(Number(sum[j])*2+Number(increment));
          if(oneColumnSum.length>1)
          {
             tempSum+=oneColumnSum[1]
             increment=oneColumnSum[0]
             if(j==sum.length-1)
              {
            tempSum+=increment
              }
          }
          else
          {
            tempSum+=oneColumnSum[0]
            increment=''
          }
          
          
          
      }
      sum=tempSum
      tempSum=''
      increment=''
    }
    return sum.split('').map(el=>Number(el)).reduce((acc,el)=>acc+el,0)
  }
  
  console.log(powerDigitSum(1000));