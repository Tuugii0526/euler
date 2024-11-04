const numberToLetters=[
    { 0:0,//
      1:3,//one
      2:3,//two
      3:5,//three
      4:4,//four
      5:4,//five
      6:3,//six
      7:5,//seven
      8:5,//eight
      9:4,//nine
      10:3,//ten
      11:6,//eleven
      12:6,//twelve
      13:8,//thirteen
      14:8,//fourteen
      15:7,//fifteen
      16:7,//sixteen
      17:9,//seventeen
      18:8,//eighteen
      19:8//nineteen
    },
    { 
      2:6,//twenty
      3:6,//thirty
      4:5,//forty
      5:5,//fifty
      6:5,//sixty
      7:7,//seventy
      8:6,//eighty
      9:6//ninety
    },
    { 0:0,
      1:13,
      2:13,
      3:15,
      4:14,
      5:14,
      6:13,
      7:15,
      8:15,
      9:14,
    },
    {
      1:11
    }
  ]
  function numberLetterCounts(limit) {
  let sumOfLetters=0
  for(let i=1;i<=limit;i++)
  {
    let  lastTwoDigits= (i%100);
    let reversedNumber=[...String(i)].reverse().join('')
    for(let j=0;j<reversedNumber.length;j++)
    {
      if(j==0 && lastTwoDigits<=19)
      {
           sumOfLetters+=numberToLetters[j][lastTwoDigits]
           j++
           continue
      }
      if(j==2 && lastTwoDigits==0 && reversedNumber[j]!=0 )
      {
      sumOfLetters+=numberToLetters[j][reversedNumber[j]]-3
      continue
      }
      sumOfLetters+=numberToLetters[j][reversedNumber[j]]
    } 
  
  }
  return sumOfLetters
  }
  function howManyLettersInNumber(number)
  {
    let sumOfLetters=0;
    let  lastTwoDigits= (number%100);
    let reversedNumber=[...String(number)].reverse().join('')
    for(let j=0;j<reversedNumber.length;j++)
    {
      if(j==0 && lastTwoDigits<=19)
      {
           sumOfLetters+=numberToLetters[j][lastTwoDigits]
           j++
           continue
      }
      sumOfLetters+=numberToLetters[j][reversedNumber[j]]
    } 
    return sumOfLetters
  }
  console.log(numberLetterCounts(1000));