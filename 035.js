function isPrime(number){
    for(let i=2;i<number;i++)
    {
      if(i%number==0)
      {
        return false
      }
    }
    return true
    }
    function getPermutations(numberArray){
     if(numberArray.length==1)
     {
       return numberArray
     }
     const permutations=[]
     for(let i=0;i<numberArray.length;i++)
     {
       let currNumber=numberArray[i]
       const remainingNumbers=numberArray.filter(number=>number!=currNumber)
       
     }
    }
    function isAllPermutationsPrime(){
    
    }
    function circularPrimes(n) {
      return n;
    }
    circularPrimes(1000000)