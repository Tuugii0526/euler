
function divisibleTriangleNumber(n) {
    let divisorNumber=0
    let sum=0
      for(let i=1;divisorNumber<=n;i++)
      {
        sum+=i;
        let counterForDouble=0
        let boundary=sum
        for(let j=1;j<boundary;j++)
        {
          if(sum%j===0)
          {
            if(j===sum/j)
            {
              divisorNumber=2*counterForDouble+1
              break
            }
            else
            {
             counterForDouble++
            boundary=sum/j  
            }
          }
        }
        divisorNumber=counterForDouble*2
      }
      return sum
    }
    
    divisibleTriangleNumber(500);