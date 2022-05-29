function  foodForPets(input) {
    let index = 0
    let days = Number(input[index]);
    index++;
    let totalFood = Number(input[index]);
    index++;
    let totalDog = 0;
    let totalCat = 0;
    let biscuit = 0;
    let eatenBiscuit = 0;
    for(let i = 1; i <= days; i++){
        let dog = Number(input[index]);
        totalDog += dog;
        index++;
        let cat = Number(input[index]);
        totalCat += cat;
        index++;
        if (i % 3 === 0) {
            biscuit = dog + cat;
            biscuit *= 0.1;
            eatenBiscuit += biscuit
        }
    }
    let totalEatenFood = totalDog + totalCat;
    let totalEatenFoodPr = totalEatenFood / totalFood * 100;
    let dogEat = totalDog / totalEatenFood * 100;
    let catEat = totalCat / totalEatenFood * 100;
    console.log(`Total eaten biscuits: ${Math.round(eatenBiscuit)}gr.`);
    console.log(`${totalEatenFoodPr.toFixed(2)}% of the food has been eaten.`);
    console.log(`${dogEat.toFixed(2)}% eaten from the dog.`);
    console.log(`${catEat.toFixed(2)}% eaten from the cat.`);
}
foodForPets(["6",
"500",
"100",
"30",
"110",
"25",
"120",
"35",
"500",
"100",
"30",
"110",
"25",
"120",
"35"])