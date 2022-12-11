function solution(n) {
  var answer = 0;
  let text = n.toString();
  let array = [];
  for (let i = 0; i < text.length; i++) {
    array.push(text[i]);
  }
  array.sort(function (a, b) {
    return b - a;
  });

  for (let i = 0; i < array.length; i++) {
    answer += array[i];
  }
  answer = Number(answer.substring(1));
  return answer;
}

solution(118372);

/* --------------------------------- 다른사람 풀이 -------------------------------- */
function solution2(n) {
  const newN = n + "";
  console.log(newN.split(""));
  const newArr = newN.split("").sort().reverse().join("");
  return +newArr;

  // .split("") - ""로 숫자를 각각의 문자열로 분해
  // .sort() - 오름차순
  // .reverse() - 뒤집기(내림차순)
  // .join("") - 문자열 다시 합치기
  // + - 정수로 바꾸기
}

solution2(118372);
