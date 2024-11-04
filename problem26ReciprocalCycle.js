function getCycles(n){
  let quotients=[]
  let starter=10
  let quotient
  let cycleNumber
  const qKrV={}
while(true)
{ 
    quotient=Math.floor(starter/n)
   starter=starter%n
   if(starter===0){
     cycleNumber=0
     break
    }
    else if(qKrV[quotient]?.includes(starter))
    {
      let cycleFirstObj=quotients.find(obj=>obj.quotient===quotient && obj.remainder===starter)
      cycleNumber=quotients.length-cycleFirstObj.position
      break
   }
   else{
     quotients.push({
       "position":quotients.length,
       "quotient":quotient,
       "remainder":starter
     })
     const rms=qKrV[quotient]
     qKrV[quotient]=(rms? [...rms,starter]:[starter])
     starter*=10
   }
}
return cycleNumber

}
function reciprocalCycles(n) {
let highestCycle=0
for(let i=2;i<n;i++)
{
  let cycleNumber=getCycles(i)
  if(cycleNumber>highestCycle)
  {
    highestCycle=cycleNumber
  }
}
  return highestCycle;
} 
