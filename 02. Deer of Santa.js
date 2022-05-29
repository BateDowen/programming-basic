function  deerOfSanta(input) {
    let missingDays = Number(input[0]);
    let foodInKg = Number(input[1]);
    let dayFoodFirstDeerKg = Number(input[2]);
    let dayFoodSecondDeerKg = Number(input[3]);
    let dayFoodThirdDeerKg = Number(input[4]);
    let firstDeer = dayFoodFirstDeerKg * missingDays;
    let secondDeer = dayFoodSecondDeerKg * missingDays;
    let thirdDeer = dayFoodThirdDeerKg * missingDays;
    let total = firstDeer + secondDeer + thirdDeer;
    let leftFood = 0;
    if (total <= foodInKg) {
        leftFood = foodInKg - total;
        console.log(`${Math.floor(leftFood)} kilos of food left.`);
    } else {
        leftFood = total - foodInKg;
        console.log(`${Math.ceil(leftFood)} more kilos of food are needed.`);
    }
}
deerOfSanta(["5",
"10",
"2.1",
"0.8",
"11"])