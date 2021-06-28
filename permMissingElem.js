function solution(A) {
  if (A.length < 1) return 1; //empty array edge case
  A.sort((a,b) => a-b);
  if (A[0] != 1) return 1; //first is missing edge case
  for (let i = 0; i < A.length; i++) {
      if (A[i] + 1 != A[i+1]) return A[i] + 1;
  }
  return A[length - 1] + 1; //last is missing
}