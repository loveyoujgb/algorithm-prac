function solution(n, lost, reserve) {
  var answer = 0;
  let array = [];
  for (let i = 1; i <= n; i++) {
    array.push(1);
  }
  for (let i = 0; i < lost.length; i++) {
    array[lost[i] - 1] = array[lost[i] - 1] - 1;
  }
  for (let i = 0; i < reserve.length; i++) {
    array[reserve[i] - 1] = array[reserve[i] - 1] + 1;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 2) {
      if (array[i - 1] === 0) {
        array[i] = 1;
        array[i - 1] = 1;
      }
    }
    if (array[i] === 2) {
      if (array[i + 1] === 0) {
        array[i] = 1;
        array[i + 1] = 1;
      }
    }
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 1) {
      answer += 1;
    }
  }
  return answer;
}
