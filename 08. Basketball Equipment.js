function BasketballEquipment(input){
const OneYearTraining = Number(input[0]);
const snikers = OneYearTraining - (OneYearTraining*0.4);
const clothes = snikers - (snikers*0.2);
const  ball = clothes*0.25;
const acsessoaries = ball*0.2;
const sum = (OneYearTraining + snikers + clothes + ball + acsessoaries);
console.log(sum);
}
BasketballEquipment([365])
BasketballEquipment([550])

// Цена на тренировките за година: 365
// Цена на баскетболните кецове: 365 – 40% = 219
// Цена на баскетболен екип: 219 – 20% = 175.20
// Цена на баскетболна топка: 1 / 4 от 175.20 = 43.80
// Цена на баскетболни аксесоари: 1 /  5 от 43.80 = 8.76
// Обща цена за екипировката: 365 + 219 + 175.20 + 43.80 + 8.76 = 811.76