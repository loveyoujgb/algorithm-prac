function solution(nums) {
  var answer = 0;
  let can = nums.length / 2;
  let arr = nums.filter((element, index) => {
    return nums.indexOf(element) === index;
  });

  if (arr.length >= can) {
    answer = can;
  } else {
    answer = arr.length;
  }

  return answer;
}

solution([3,3,3,2,2,4])