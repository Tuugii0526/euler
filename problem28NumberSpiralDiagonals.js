
function spiralDiagonals(n) {
  const end=n*n;
  let increment=2;
  let sum=0;
  let start=1
  let counter=0
  while(counter<=4)
  {
    if(start>end)
    {
      break
    }
    sum+=start
    if(counter<4)
    {
      start+=increment
    }
    else
    {
      counter=0
      increment+=2
      start+=increment
    }
    counter++
  }
  return sum;
}

console.log(spiralDiagonals(1001));