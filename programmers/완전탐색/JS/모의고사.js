function solution(answers) {
  let person1 = [1, 2, 3, 4, 5];
  let person2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let cntArray = [0, 0, 0]; //cntArray
  let length1 = person1.length,
    length2 = person2.length,
    length3 = person3.length;
  let result = [];

  for (let i = 0; i < answers.length; i++) {
    if (person1[i % length1] === answers[i]) cntArray[0]++; //1번이 맞춘 경우
    if (person2[i % length2] === answers[i]) cntArray[1]++; //2번이 맞춘 경우
    if (person3[i % length3] === answers[i]) cntArray[2]++; //3번이 맞춘 경우
  }

  let maxValue = Math.max(...cntArray);

  cntArray.forEach((value, idx) => {
    if (value === maxValue) {
      result.push(idx + 1);
    }
  });

  return result;
}
