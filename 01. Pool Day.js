function  poolDay(input) {
    let people = Number(input[0]);
    let entryTax = Number(input[1]);
    let shezlongPrice = Number(input[2]);
    let umbrellaPrice = Number(input[3]);
    let totalTax = people * entryTax;
    let shezlongPeople = Math.round(people * 0.75) * shezlongPrice;
    let umbrellaPeople = Math.round(people / 2) * umbrellaPrice;
    let total = (totalTax + shezlongPeople + umbrellaPeople);
    console.log(`${total.toFixed(2)} lv.`);

}
poolDay(["21",
"5.50",
"4.40",
"6.20"])