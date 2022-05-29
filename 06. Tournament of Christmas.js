function tournamentOfChristmas(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;
    let sport = input[index];
    let moneyForDay = 0;
    let totalMoney = 0;
    let allWinCounter = 0;
    let allLoseCounter = 0;
    let winCounter = 0;
    let loseCounter = 0;
    for(let i = 1; i <= days; i++){ 
        moneyForDay = 0
        winCounter = 0;
        loseCounter = 0;
        while (sport !== "Finish") {
            index++
            sport = input[index];
            if (sport === "win") {
                moneyForDay += 20;
                winCounter++;
            } else {
                moneyForDay += 0;
                loseCounter++;
            }
            index++;
            sport = input[index];
        } 
        if (winCounter > loseCounter) {
            moneyForDay += moneyForDay * 0.1;
            allWinCounter++;
        } else {
            allLoseCounter++;
        }
        totalMoney += moneyForDay;
        index++;
        sport = input[index];
    } 
    if (allWinCounter > allLoseCounter) {
        totalMoney += totalMoney * 0.2;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else{
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }

}
tournamentOfChristmas(["2",
"volleyball",
"win",
"football",
"lose",
"basketball",
"win",
"Finish",
"golf",
"win",
"tennis",
"win",
"badminton",
"win",
"Finish"])