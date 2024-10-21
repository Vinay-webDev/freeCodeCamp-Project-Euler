function multiplesOf3Or5(number) {
    let sumThree = 0;
    let sumFive = 0;
  
    for (let i = 0; i < number; i++) {
      if (i % 3 === 0) {
        sumThree += i;
      } else if (i % 5 === 0) {
        sumFive += i;
      } else {
        sumThree += 0;
        sumFive += 0;
      }
    }
    console.log(sumThree+sumFive);
    return sumThree + sumFive;
  }
  
  //multiplesOf3Or5(1000);