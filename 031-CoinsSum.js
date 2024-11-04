let paths=0
function coinSums(n) {
const coins=[1,2,5,10,20,50,100,200]
const filteredCoins=coins.filter(c=>c<=n);
getPaths(0,filteredCoins,0,n)
return paths;
}
function getPaths(startIndex,coins,sum,target)
{
 if(sum>target )
 {
   return
 }
 else {
   if(sum==target)
   {
   paths++
   return
   } 
 }
 if(startIndex>coins.length-1)
  {
    return
  }
 const limit=Math.floor(target/coins[startIndex])
 for(let i=0;i<=limit;i++)
 {
   getPaths(startIndex+1,coins,sum+i*coins[startIndex],target)
 }
}
console.time('time:')
console.log(coinSums(200)) //340ms
console.timeEnd('time:')