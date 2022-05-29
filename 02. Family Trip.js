function  familyTrip(input) {
    let budget = Number(input[0]);
    let nightsCount = Number(input[1]);
    let price = Number(input[2]);
    let others = Number(input[3]);
    if(nightsCount > 7){
        price = price - (price * 0.05)
    }
    let totalNights = nightsCount * price;
    let othersInProcent = others /  100;
    let othersPrice = budget * othersInProcent
    let total = totalNights + othersPrice
    if(total < budget){
        console.log(`Ivanovi will be left with ${(budget - total).toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${(total - budget).toFixed(2)} leva needed.`);
    }

}
familyTrip(["800.50",
"8",
"100",
"2"])