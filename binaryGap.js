const binary = (N) => {
  return (N).toString(2)
}

const gaps = (bin) => {
  let open = false;
  let gaps = [];
  let currentCount = 0;
  for (let i = 0; i < bin.length; i++) {
      if (bin[i] == '1') {
          if (open) {
              gaps.push(currentCount - 0);
              currentCount = 0;
          } else {
              open = true;
          }
      } else if (bin[i] == '0' && open) currentCount++;
  }    
  gaps.sort((a, b) => b - a);
  return gaps[0] ? gaps[0] : 0;
}

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  const bin = binary(N);
  return gaps(bin);
}