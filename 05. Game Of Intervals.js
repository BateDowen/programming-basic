function gameOfIntervals(input) {
  let gameRounds = Number(input[0]);
  let from0to9 = 0;
  let countFrom0to9 = 0;
  let from10to19 = 0;
  let countFrom10to19 = 0;
  let from20to29 = 0;
  let countFrom20to29 = 0;
  let from30to39 = 0;
  let countFrom30to39 = 0;
  let from40to50 = 0;
  let countFrom40to50 = 0;
  let invalid = 0;
  let totalResult = 0;
  for (let i = 1; i <= gameRounds; i++) {
    let points = Number(input[i]);
    let result = 0;
    if (points >= 0 && points <= 9) {
      from0to9 = points * 0.2;
      result += from0to9;
      countFrom0to9++;
    } else if(points >= 10 && points <= 19){
        from10to19 = points * 0.3;
        result += from10to19;
        countFrom10to19++
    } else if (points >= 20 && points <= 29){
        from20to29 = points * 0.4;
        result += from20to29;
        countFrom20to29++;
    } else if(points >= 30 && points <= 39){
        from30to39 = 50;
        result += from30to39;
        countFrom30to39++;
    } else if (points >= 40 && points <= 50){
        from40to50 = 100;
        result += from40to50;
        countFrom40to50++;
    } else if (points < 0 || points > 50){
              totalResult /= 2;
              invalid++;
    }
    totalResult += result; 
  } console.log(totalResult.toFixed(2));
    let from0to9Procent = (countFrom0to9 / gameRounds) * 100;
    let from10to19Procent = (countFrom10to19 / gameRounds) * 100;
    let from20to29Procent = (countFrom20to29 / gameRounds) * 100;
    let from30to39Procent = (countFrom30to39 / gameRounds) * 100;
    let from40to50Procent = (countFrom40to50 / gameRounds) * 100;
    let invalidProcent = (invalid / gameRounds) * 100;
    console.log(`From 0 to 9: ${from0to9Procent.toFixed(2)}%`);
    console.log(`From 10 to 19: ${from10to19Procent.toFixed(2)}%`);
    console.log(`From 20 to 29: ${from20to29Procent.toFixed(2)}%`);
    console.log(`From 30 to 39: ${from30to39Procent.toFixed(2)}%`);
    console.log(`From 40 to 50: ${from40to50Procent.toFixed(2)}%`);
    console.log(`Invalid numbers: ${invalidProcent.toFixed(2)}%`);
}
gameOfIntervals([10, 43, 57, -12, 23, 12, 0, 50, 40, 30, 20]);
