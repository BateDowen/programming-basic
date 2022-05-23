function MaxNumber(input) {
   let index = 0;
   let command = input[index];
   index++;
   let maxNUmber = Number.MIN_SAFE_INTEGER;

   while(command !== "Stop"){
       let num = Number(command)
       if (maxNUmber < num){
           maxNUmber = num
       }
       command = input[index];
       index++
   } console.log(maxNUmber)
}
MaxNumber(["100",
"99",
"80",
"70",
"Stop"]) 