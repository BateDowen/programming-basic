function Fishland(input){
const skumriq = Number(input[0]);
const caca = Number(input[1]);
const palamudKg = Number(input[2]);
const safridKg = Number(input[3]);
const midiKg = Number(input[4]);
const midi1Kg = 7.50;
let palamudPrice = (skumriq + skumriq * 0.6)*palamudKg;
let safridPrice = ((caca + caca * 0.8)*safridKg);
let midiPrice = (midiKg*midi1Kg);
let sum = (palamudPrice + safridPrice + midiPrice);
console.log(sum.toFixed(2));
}
// ⦁	Паламуд – 60% по-скъп от скумрията
// ⦁	Сафрид – 80% по-скъп от цацата
// ⦁	Миди – 7.50 лв. за килограм

Fishland(["6.90","4.20","1.5","2.5","1"])
// Цена на паламуда = 6.90 + 6.90 * 0.60 = 11.04 лв. за килограм
// Сума паламуд = 1.5 * 11.04 = 16.56
// Цена на сафрид = 4.20 + 4.20 * 0.80 =  7.56 лв. за килограм
// Сума сафрид = 2.5 * 7.56 = 18.90 
// Сума миди = 1 * 7.50 = 7.50 
// Сметка = 16.56 + 18.90 + 7.50 = 42.96