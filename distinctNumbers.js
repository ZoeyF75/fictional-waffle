function solution(A) {
  const set = new Set();
  for (let i = 0; i < A.length; i++) {
      set.add(A[i]);
  }
  return set.size;
}

// function solution(A) {
//   const newArray = [];
//   A.filter(e => {
//       if (!newArray.includes(e)) newArray.push(e);
//   })
//   return newArray.length;
// }