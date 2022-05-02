function Repainting(input) {
const nailon = (Number(input[0]) + 2) * 1.5;
const paint = (Number(input[1])+(input[1]) * 0.1) * 14.5;
const detergent = Number(input[2]) * 5;
const bags = 0.4;
const workingHours = Number(input[3]);
const materialPrice = (nailon + paint + detergent + bags);
const peoplePrice = (materialPrice*0.3)*workingHours;
const finalSum = (materialPrice + peoplePrice);
console.log(finalSum);

}
Repainting(["10 ","11 ","4 ","8 "]);
Repainting(["5 ","10 ","10 ","1 "])
// Сума за найлон: (10 + 2) * 1.50 = 18 лв.
// Сума за боя: (11 + 10%) * 14.50 = 175.45 лв.
// Сума за разредител: 4 * 5.00 = 20.00 лв.
// Сума за торбички: 0.40 лв.
// Обща сума за материали: 18 + 175.45 + 20.00 + 0.40 = 213.85 лв.
// Сума за майстори: (213.85 * 30%) * 8 = 513.24 лв.
// Крайна сума: 213.85 + 513.24 = 727.09 лв