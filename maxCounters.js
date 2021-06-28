const createArr = (N) => {
  const arr = new Array(N);
  arr.fill(0);
  return arr;
}

const single = (A, index) => {
  A[index] += 1;
  return A;
}

const all = (A, length) => {
  A.sort((a,b) => b - a);
  const max = A[0];
  const arr = new Array(length);
  arr.fill(max);
  return arr;
}

function solution(N, A) {
 let arr = createArr(N);
 for (let i = 0; i < A.length; i++) {
      A[i] <= N ? arr = single(arr, A[i] - 1) : arr = all(arr, N); 
 }
 return arr;
}