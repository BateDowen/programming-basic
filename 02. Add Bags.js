function  addBags(input) {
    let overTwentyPrice = Number(input[0]);
    let luggageKg = Number(input[1]);
    let daysLeft = Number(input[2]);
    let luggageCount = Number(input[3]);
    let taxes = 0;
    if (luggageKg <= 10) {
        taxes = overTwentyPrice * 0.2;
    } else if (luggageKg <= 20) {
        taxes = overTwentyPrice * 0.5;
    } else {
        taxes = overTwentyPrice;
    }
    if (daysLeft <= 7) {
        taxes += taxes * 0.4;
    } else if (daysLeft > 7 && daysLeft <= 30) {
        taxes += taxes * 0.15;
    } else if (daysLeft > 30) {
        taxes += taxes * 0.1;
    }
    let total = taxes * luggageCount;
    console.log(`The total price of bags is: ${total.toFixed(2)} lv. `);
}
addBags(["63.80",
"23",
"3",
"1"])