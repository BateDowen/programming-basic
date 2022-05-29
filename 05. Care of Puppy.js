function  careOfPuppy(input) {
    let index = 0;
    let foodKg = Number(input[index]);
    index++;
    let dayliFood = input[index];
    let foodGr = foodKg * 1000;
    while (dayliFood !== "Adopted") {
        dayliFood = Number(input[index]);
        foodGr -= dayliFood;
        index++;
        dayliFood = input[index];
    }
   if(foodGr >= 0){
     console.log(`Food is enough! Leftovers: ${foodGr} grams.`);
   } else {
       console.log(`Food is not enough. You need ${Math.abs(foodGr)} grams more.`);
   }
}
careOfPuppy(["3",
"1000",
"1000",
"1000",
"Adopted"])