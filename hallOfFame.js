function solution(k, score) {
  var answer = [];
  let array = [];
  for (let i = 0; i < score.length; i++) {
    array.push(score[i]);
    array.sort(function (a, b) {
      return b - a;
    });
    if (array.length <= k) {
      answer.push(array[array.length - 1]);
    } else {
      array = array.slice(0, k);
      answer.push(array[array.length - 1]);
    }
  }
  return answer;
}

solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]);
