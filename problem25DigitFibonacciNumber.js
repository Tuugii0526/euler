function getFibonacci(index){
  if(index==1 || index==2)
  {
    return 1
  }
  return getFibonacci(index-1)+getFibonacci(index-2)
  }
  function getDigitNumber(num){
  const digitLen =String(num).split('').length
  return digitLen
  }
  function digitFibonacci(n) {
  const initial=[1,1,2]
  let currentPos=2
  let counter=3
  while(getDigitNumber(initial[currentPos])<n)
    {
      counter++
      if(currentPos==2)
    {
      initial[0]=initial[1]+initial[2]
      initial[1]=initial[2]
      currentPos=0
    }
    else if(currentPos==0)
    {
      initial[2]=initial[0]+initial[1]
      initial[1]=initial[0]
      currentPos=2
    }
    }
  return counter
  }
  
  console.log(digitFibonacci(5))