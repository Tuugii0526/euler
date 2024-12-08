function fiboEvenSum(n) {
  const triangle = [0, 0, 1];
  let lastNumber = triangle[2];
  let orientar = 1;
  let sum = 0;
  while (lastNumber < n) {
    if (lastNumber % 2 == 0) {
      sum += lastNumber;
    }
    if (orientar) {
      triangle[0] = triangle[1] + triangle[2];
      triangle[1] = triangle[2];
      lastNumber = triangle[0];
      orientar = 0;
    } else {
      triangle[2] = triangle[0] + triangle[1];
      triangle[1] = triangle[0];
      lastNumber = triangle[2];
      orientar = 1;
    }
  }
  return sum;
}
console.time("time");
console.log(fiboEvenSum(4000000));
console.timeEnd("time");
