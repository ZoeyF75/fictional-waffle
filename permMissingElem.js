function solution(A) {
  if (A.length < 1) return -1;
  A.sort((a,b) => a-b);
  for (let i = 0; i < A.length; i++) {
      if (A[i] + 1 != A[i+1]) return A[i] + 1;
  }
  return A[length - 1] + 1;
}