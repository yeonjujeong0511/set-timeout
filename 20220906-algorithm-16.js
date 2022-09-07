// 강사님 답안

function googoodanCore(dan,limit){
  let stepCount = 0;
  let resultArray = [];

  for (let i = 1; i <= limit; i++){
    let calc = dan * i;

    // Q.3 실수일때(소숫점이 있는 수) , 소숫점 첫번째 자리까지만 출력
    if(Number.isInteger(calc) === false){ // 정수인지 아닌지 확인
      calc = calc.toFixed(1); // 소숫점 첫번째 자리까지만 출력
    }

    // Q-4. 음수(0보다 작은 수) 를 처리 했을 때 "절대값"이 출력되도록 처리하세요.
    if(calc < 0 && i === limit){
      console.log(Math.abs(calc));
    }
    // Math.abs --> 절대값 반환 함수

    resultArray.push(calc);
    stepCount++;
  }

  //Q-5. 수열의 합, 시그마 로직을 구현하세요. (에를 들어 1단의 총 합계 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 합계) 
  let reduceResult = resultArray.reduce(function(prev, curr){
    return parseFloat(prev) + parseFloat(curr);
  })

  console.log(`시그마 값 :${reduceResult}`)
  console.log(`총${stepCount}번 실행`);
  return resultArray;
}

console.log(googoodanCore(-3.2,9));
console.log(googoodanCore(3,9));

