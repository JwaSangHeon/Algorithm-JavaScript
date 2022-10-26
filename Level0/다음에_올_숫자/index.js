function solution(common) {
  let answer = 0;
  if (common[1] - common[0] === common[2] - common[1]) {
    // 등차수열
    const difference = common[1] - common[0];
    answer = common[common.length - 1] + difference;
  } else {
    // 등비수열
    const difference = common[1] / common[0];
    answer = common[common.length - 1] * difference;
  }
  return answer;
}
