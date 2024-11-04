const sums=[]
function maxPath(array,height,width,sum)
{
  if(height>=array.length-1)
   {
     sums.push(array[height][width]+sum)
     return
   }
   sum+=array[height][width]
maxPath(array,height+1,width,sum)
maxPath(array,height+1,width+1,sum)
}
function maximumPathSumI(triangle) {
  maxPath(triangle,0,0,0)
  let max=0
  for(let i=0;i<sums.length;i++)
  {
    if(sums[i]>max)
    {
      max=sums[i]
    }
  }
  return max
}
