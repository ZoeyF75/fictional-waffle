const rotate = (A) => {
  let newArray = [];
  newArray.push(A[A.length - 1]);
  for (let i = 0; i < A.length - 1; i++) {
      newArray.push(A[i]);
  }
  return newArray;
}

function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length < 1) return [];
  let rotatedArray = A;

  for (let i = 0; i < K; i++) {
      rotatedArray = rotate(rotatedArray);
  }
  
  return rotatedArray;
}