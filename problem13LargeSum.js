function largeSum(arr) {
  const sum= [0]
for(let i=0;i<arr.length;i++)
{
const arr1=arr[i].split('').map(el=>Number(el)).reverse()

 for(let j=0;j<arr1.length;j++)
 {
  if(sum[j]===undefined)
  {
      sum[j]=0
  }
   // One column sum ,which is turned into number
   let oneColumnSum=String(sum[j]+arr1[j]).split('').map(el=>Number(el));
   let currJ=j;
   console.log('This is sum:',sum)
   console.log(`${currJ}nth columnSum`,oneColumnSum)
   
   while(oneColumnSum.length>1)
   {
     const splicedArray=oneColumnSum.splice(0,1)
     const increment=splicedArray[0]
     console.log('increment',increment)
     sum[currJ]=oneColumnSum[0]
     if(sum[currJ+1]===undefined)
     {
       sum[currJ+1]=0
     }
   currJ++
     oneColumnSum=String(sum[currJ]+increment).split('').map(el=>Number(el));
     console.log(oneColumnSum)
   }
   
  sum[currJ]=oneColumnSum[0]
  
 }
}
return sum.reverse().slice(0,10).map(number=>Number(number)).join("")
}

// Only change code above this line

const testNums = [
  '37107287533902102798797998220837590246510135740250',
  '46376937677490009712648124896970078050417018260538'
];