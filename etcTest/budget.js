function solution(d, budget) {
  var answer = 0;
  let array = d.sort((a, b) => a - b);
  for (let i = 0; i < d.length; i++) {
    if (budget - array[i] >= 0) {
      budget = budget - array[i];
      answer += 1;
    }
  }
  return answer;
}
solution([1, 3, 2, 5, 4], 9);
solution([2, 2, 3, 3], 10);
solution([12, 5, 12, 5], 12);