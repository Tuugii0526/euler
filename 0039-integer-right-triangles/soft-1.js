function count(p) {
  const maxSideLength = p / 2 - 1;
  let restStart, restEnd;
  for (let max = 1; max <= maxSideLength; max++) {
    const restP = p - max;
    restStart = 1;
    restEnd = restP - 1;
    while (restStart < restEnd) {}
  }
}
function intRightTriangles(n) {
  let max = 12;
  for (let i = 14; i <= n; i += 2) {}
  return max;
}

// console.log(intRightTriangles(500))
// p = 12 {3,4,5}
