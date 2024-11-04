function isPythagorean(a,b,c)
{
  return a**2+b**2==c**2
}
function specialPythagoreanTriplet(n) {
 
for(let i=1;i<=n-2*i-3;i++)
{
for(let j=1;j<n-3*i-j;j++)
{
  const cPlus=n-3*i-j
 if(isPythagorean(i,i+j,i+cPlus))
 {
   return i*(i+j)*(i+cPlus)
 }
}
}
}
specialPythagoreanTriplet(1000)