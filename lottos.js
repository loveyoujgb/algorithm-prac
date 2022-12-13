function solution(lottos, win_nums) {
  var answer = [];
  let win = [5, 4, 3, 2, 1];
  let result = 0;
  let win_result = 0;
  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] === 0) {
      win_result += 1;
    }
    for (let j = 0; j < win_nums.length; j++) {
      if (lottos[i] === win_nums[j]) {
        result += 1;
      }
    }
  }

  win_result += result;
  if (win_result < 2) {
    answer.push(6);
  } else {
    answer.push(win[win_result - 2]); //6
  }
  if (result < 2) {
    answer.push(6);
  } else {
    answer.push(win[result - 2]);
  }
  return answer;
}
solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);
solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]);
solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]);
solution([1, 2, 5, 6, 8, 0], [20, 9, 3, 45, 4, 35]);
