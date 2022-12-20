function solution(s) {
  var answer = "";
  let text = s.split(" ");
  for (i = 0; i < text.length; i++) {
    for (j = 0; j < text[i].length; j++) {
      let ss = text[i];
      if (j % 2 === 0) {
        answer += ss[j].toUpperCase();
      } else {
        answer += ss[j].toLowerCase();
      }
    }
    if (i < text.length - 1) {
      answer += " ";
    }
  }
  return answer;
}

solution("try hello world");
