function solution(babbling) {
  let answer = 0;
  const says = ["aya", "ye", "woo", "ma"];

  babbling.map((word) => {
    let transWord = word;
    says.map((say) => {
      let regex = new RegExp(say, "g");
      if (!word.includes(say + say)) {
        word = word.replace(regex, "");
      }
      transWord = word;
    });
    console.log(transWord);
    if (transWord === "") {
      answer++;
    }
  });
  console.log(answer);
  return answer;
}
