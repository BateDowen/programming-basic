function OperationsBetweenNumbers(input) {
  const N1 = Number(input[0]);
  const N2 = Number(input[1]);
  const operator = input[2];
  let result = 0;
  let EvenorOdd=""
  if (operator === "+"){
      result = N1+N2;
      if (result%2===0){
      EvenorOdd = "even"
      } else {
          EvenorOdd = "odd"
      }
      console.log(`${N1} ${operator} ${N2} = ${result} - ${EvenorOdd} `)
  }
   if (operator === "-"){
       result = N1 - N2;
      if (result%2===0){
      EvenorOdd = "even"
      } else {
          EvenorOdd = "odd"
      }
      console.log(`${N1} ${operator} ${N2} = ${result} - ${EvenorOdd} `)
   }
    if (operator === "*") {
        result = N1 * N2
        if (result%2===0){
            EvenorOdd = "even"
            } else {
                EvenorOdd = "odd"
            }
            console.log(`${N1} ${operator} ${N2} = ${result} - ${EvenorOdd} `)
    }
    if (operator === "/"){
        result = N1 / N2
        if (result%2===0){
            EvenorOdd = "even"
            } else {
                EvenorOdd = "odd"
            }
        if (N1===0||N2===0){
            console.log (`Cannot divide ${N1} by zero`) 
        } else {
            console.log(`${N1} ${operator} ${N2} = ${result.toFixed(2)} `)
        }
    }
    if (operator === "%"){
        result = N1 % N2
        if (result%2===0){
            EvenorOdd = "even"
            } else {
                EvenorOdd = "odd"
            }
        if (N1===0||N2===0){
            console.log (`Cannot divide ${N1} by zero`) 
        } else {
            console.log(`${N1} ${operator} ${N2} = ${result}`)
        }
    }

}
OperationsBetweenNumbers(["10", "0", "%"]);
