function solution(babbling) {
  var answer = 0;
  let can = ["aya", "ye", "woo", "ma"];
  let array = "";
  for (let i = 0; i < babbling.length; i++) {
    array = babbling[i];
    for (let j = 0; j < can.length; j++) {
      array = array.replaceAll(can[j], j + 1); // 해당 인덱스로 치환
    }
    //"ayau" 인 경우 "1u" 로 치환됨
    if (parseInt(array).toString() === array) {
      //"1u" 는 이 if문 안에 못 들어옴
      answer += 1; // 치환한 결과 숫자만 포함된 아이가 있는 경우이므로 +=1
      for (let j = 0; j < array.length; j++) {
        array = parseInt(array).toString();
        if (array[j] === array[j + 1]) {
          answer -= 1; // "11"와 같이 연속된 숫자면 같은 발음 두번 하는거니까 -=1
          break;
        }
      }
    }
  }
  console.log(answer);
  return answer;
}
solution(["woo", "yee", "u", "maa"]);
solution(["ayamaayaye", "uuu", "ayamaayayeyeyeayamaayayeyeye", "yemawoo", "ayaayaa"]);
