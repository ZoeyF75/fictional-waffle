function solution(A) {
  let W = 0;
  let E = 0;
  let pass = 0;
  for (let i = 0; i < A.length; i++) {
      A[i] == 0 ? E++ : W++;
      pass += E*W;
      if (W == 1) W--;
  }
  return pass > 1000000000 ? -1: pass;
}