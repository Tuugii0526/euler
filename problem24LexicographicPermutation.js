// Problem 24: Lexicographic permutations
// A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

// 012   021   102   120   201   210
// What is the nth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
const getFactorial=(n)=>{
    let factorial=1
    for(let i=1;i<=n;i++)
    {
      factorial*=i
    }
    return factorial
    }
    const getPermutations=(index,sequence)=>{
           if(sequence.length===0)
           {
             return ''
           }
           const firstDigitOccurences=getFactorial(sequence.length-1)
           const firstDigitIndex=Math.floor(index/firstDigitOccurences);
           const firstDigit=sequence[firstDigitIndex]
           const firstDigitTakenIndexes=firstDigitIndex*firstDigitOccurences
           const recursiveIndex=index-firstDigitTakenIndexes
           const recursiveSequence=sequence.filter(num=>num!==firstDigit)
           return `${firstDigit}`+getPermutations(recursiveIndex,recursiveSequence)
    }
    function lexicographicPermutations(n) {
    const numbers=[0,1,2,3,4,5,6,7,8,9]
    const number=getPermutations(n,numbers)
      return number;
    }
    
    lexicographicPermutations(999999)