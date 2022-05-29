function easterBakery(input) {
    let oneKgFlowerPrice = Number(input[0]);
    let kgFlower = Number(input[1]);
    let kgSugar = Number(input[2]);
    let twelveEggsCount = Number(input[3]);
    let yeastPackages = Number(input[4]);
    let sugarPrice = oneKgFlowerPrice * 0.75; 
    let twelveEggsPrice = oneKgFlowerPrice + (oneKgFlowerPrice * 0.1);
    let oneYeastPackagePrice = sugarPrice * 0.2;
    let sumFlower = kgFlower * oneKgFlowerPrice;
    let sumSugar = sugarPrice * kgSugar;
    let sumEggs = twelveEggsCount * twelveEggsPrice;
    let sumYeast = yeastPackages * oneYeastPackagePrice;
    let total = sumFlower + sumSugar + sumEggs + sumYeast;
    console.log(total.toFixed(2));

}
easterBakery(["50",
"10",
"3.5",
"6",
"1"])