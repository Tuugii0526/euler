function isPythagorean(a, b, c) {
  return a ** 2 + b ** 2 == c ** 2;
}
function count(p) {
  let count = 0;
  const maxSideLength = p / 2 - 1;
  let restStart, restEnd;
  for (let max = 1; max <= maxSideLength; max++) {
    const restP = p - max;
    restStart = 1;
    restEnd = restP - 1;
    while (restStart < restEnd) {
      if (isPythagorean(restStart, restEnd, max)) {
        count++;
      }
      restStart++;
      restEnd--;
    }
  }
  return count;
}
function intRightTriangles(n) {
  const maxSet = [12, 1];
  let cntr;
  for (let i = 14; i <= n; i += 2) {
    cntr = count(i);
    if (maxSet[1] < cntr) {
      maxSet[0] = i;
      maxSet[1] = cntr;
    }
  }
  return maxSet[0];
}

console.log(intRightTriangles(500));
// p = 12 {3,4,5}
