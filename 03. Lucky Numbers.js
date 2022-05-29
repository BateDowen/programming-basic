function luckyNumbers(input) {
  let n = Number(input[0]);
  let sum = 0;
  let sum2 = 0;
  let sum3 = 0;
  let sum4 = 0;
  let suma = 0;
  let suma2 = 0;
  let lucky = "";
  for(let i = 1; i<= 9; i++){
      for(let j = 1; j <= 9; j++){
          for(let k = 1; k <= 9; k++){
              for(let g = 1; g <= 9; g++){
                 sum = i;
                 sum2 = j;
                 suma = sum + sum2;
                 sum3 = k;
                 sum4 = g;
                 suma2 = sum3 + sum4
                if (suma === suma2 && n % suma === 0) {
                    lucky += `${i}${j}${k}${g} `
                }
              }
          }
      }
  }  console.log(lucky);
}
luckyNumbers([7])