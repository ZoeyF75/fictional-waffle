function solution(A) {
  const totalSum = A.reduce((a, b) => a + b, 0);
  let leftSide = 0;
  let rightSide = 0;
  let diffs = [];
  A.forEach (num => {
      leftSide += num;
      rightSide = totalSum - leftSide;
      diffs.push(Math.abs(leftSide - rightSide));
  })
  diffs.sort((a,b) => a - b);
  return diffs[0];
}