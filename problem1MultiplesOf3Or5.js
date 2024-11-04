function multiplesOf3Or5(number) {
    let numberForThree;
    let numberForFive;
    let numberForFifteen;
    if(0==number%3)
    {
       numberForThree=number-3
    }
    else
    {
       numberForThree=number-(number%3)
    }
    if(0==number%5)
    {
      numberForFive=number-5
    }
    else
    {
       numberForFive=number-(number%5)
    }
    if(0==number%15)
    {
      
      numberForFifteen=number-15
    }
    else
    {
      numberForFifteen=number-(number%15)
    }
    console.log(numberForFive)
    console.log(numberForThree)
  console.log(numberForFifteen)
   return multiplesOfNumber(numberForThree,3)+multiplesOfNumber(numberForFive,5)-multiplesOfNumber(numberForFifteen,15)
  }
  