function getFactorials() {
    const factorials = {};
    function factorial(num) {
      if (num == 0 || num == 1) {
        return 1;
      }
      return num * factorials[num - 1];
    }
    for (let i = 0; i < 10; i++) {
      factorials[i] = factorial(i);
    }
    return factorials;
  }
  function getDigitFactorialsSum(num){
    const factorials=getFactorials()
   const digits= String(num).split('').map(el=>Number(el))
  return digits.reduce((acc,curr)=>acc+factorials[curr],0)
  }
  function digitFactorial() {
    const factorialsOfDigits=getFactorials()
    var sum = 0;
    var numbers = [];
    for(let i=3;i<10_000_000;i++)
    {
      if(i==getDigitFactorialsSum(i))
      {
        sum+=getDigitFactorialsSum(i)
        numbers.push(i)
      }
    }
    
    return { sum, numbers };
  }
  console.time('time:')
  digitFactorial();  //83ms
  console.timeEnd('time:')
  