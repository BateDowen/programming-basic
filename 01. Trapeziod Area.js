function TrapeziodArea(input){
const b1 = Number(input[0]);
const b2 = Number(input[1]);
const h = Number(input[2]);
const area = (b1 + b2) * h / 2; 
console.log(area.toFixed(2));
} 
TrapeziodArea(["8","13","7"]);


// // с основи b1 и b2 и височина h.
//  Формулата за лице на трапец е (b1 + b2) * h / 2.
// // На фигурата по-долу е показан трапец със страни 8 и 13 и височина 7.
//  Той има лице (8 + 13) * 7 / 2 = 73.5.
