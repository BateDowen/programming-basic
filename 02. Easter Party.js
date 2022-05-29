function  easterParty(input) {
    let guestsCount = Number(input[0]);
    let onePersonPrice = Number(input[1]);
    let budget = Number(input[2]);
    if (guestsCount >= 10 && guestsCount <= 15){
        onePersonPrice -= onePersonPrice * 0.15;
    } else if(guestsCount > 15 && guestsCount <= 20){
        onePersonPrice -= onePersonPrice * 0.2;
    } else if (guestsCount > 20){
        onePersonPrice -= onePersonPrice * 0.25;
    }
    let cakePrice = budget * 0.1;
    let total = guestsCount * onePersonPrice + cakePrice;
    if(total <= budget){
        console.log(`It is party time! ${(budget - total).toFixed(2)} leva left.`);
    } else {
        console.log(`"No party! ${Math.abs(total - budget).toFixed(2)} leva needed.`);
    }

}
easterParty(["18",
"30",
"450"])