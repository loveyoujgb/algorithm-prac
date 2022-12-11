function solution(n) {
  var answer = 0;
  for (let i = 0; i < n; i++) {
    if (n % i === 1) {
      return (answer = i);
    }
  }
  return answer;
}
solution(10);
solution(12);

/* ------------------------------- 다른사람이 푼 풀이 ------------------------------- */
function solution2(n, x = 1) {
  while (x++) {
    if (n % x === 1) { 
      console.log(x);
      return x;
    }
  }
}

solution2(10);
solution2(12);
