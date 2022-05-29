function VegetableMarket(input){
const euro = 1.94;
const vegetables = Number(input[0]);
const fruits = Number(input[1]);
const AllVegatables = vegetables*Number(input[2]);
const AllFruits = fruits*Number(input[3]);
const sum = (AllFruits + AllVegatables) / euro;
console.log(sum.toFixed(2));
}
VegetableMarket(["0.194","19.4","10","10"]);

// Зеленчуците струват – 0.194лв. * 10кг. = 1.94лв.
// Плодовете струват – 19.4лв. * 10кг.  = 194лв.
// Общо – 195.94лв. = 101евро