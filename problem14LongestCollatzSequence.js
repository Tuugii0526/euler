function longestCollatzSequence(limit) {
    let counter=0;
    let max=0;
    let maxNumber=0
    for(let i=2;i<limit;i++)
    {
      let currentNumber=i
      while(currentNumber>1)
      {
        counter++
        if(currentNumber%2===0)
        {
          currentNumber/=2;
        }
        else
        {
          currentNumber*=3;
          currentNumber++;
        }
      }
      if(max<counter)
      {
        max=counter
        maxNumber=i
      }
       counter=0
    }
    return maxNumber
    }
    
    longestCollatzSequence(14);