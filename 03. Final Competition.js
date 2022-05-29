function finalCompetition(input) {
    let dancersCount = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let country = input[3];
    let moneyWin = 0;
    let razhodi = 0;
    moneyWin = dancersCount * points;
    if (country === "Abroad") {
        moneyWin += moneyWin * 0.5;
    } 
    switch(country){
        case "Bulgaria":
            if (season === "summer") {
                razhodi = 0.05
                moneyWin -= moneyWin * razhodi
            } else if (season === "winter") {
                razhodi = 0.08;
                moneyWin -= moneyWin * razhodi;
            }
            break;
        case "Abroad":
            if (season === "summer") {
                razhodi = 0.1;
                moneyWin -= moneyWin * razhodi
            } else if (season === "winter") {
                razhodi = 0.15;
                moneyWin -= moneyWin * razhodi;
            }
            break;
    }
    let charity = moneyWin * 0.75;
    let leftMney = moneyWin - charity
    let moneyForDancers = leftMney / dancersCount;
    console.log(`Charity - ${charity.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyForDancers.toFixed(2)}`);
}
finalCompetition(["25",
"98",
"winter",
"Bulgaria"])