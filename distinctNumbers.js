function solution(A) {
  const newArray = [];
  A.filter(e => {
      if (!newArray.includes(e)) newArray.push(e);
  })
  return newArray.length;
}