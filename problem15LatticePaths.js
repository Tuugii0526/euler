function latticePaths(gridSize) {
  let nFactorial=1;
  let nMinusKFactorialMultiplykFactorial=1;
  
for(let i=gridSize+1;i<=gridSize*2;i++)
{
  nFactorial*=i
}
for(let i=1;i<=gridSize;i++)
{
nMinusKFactorialMultiplykFactorial*=i
}
  return nFactorial/nMinusKFactorialMultiplykFactorial;
}

console.log(latticePaths(4));