function  footballTournament(input) {
    let index = 0;
    let teamName = input[index];
    index++;
    let playCount = Number(input[index]);
    index++;
    if(playCount === 0){
        console.log(`${teamName} hasn't played any games during this season.`);
        return;
    }
    let totalPoints = 0;
    let winPointCounter = 0;
    let dPoinstCounter = 0;
    let lPointsCounter = 0;

    for(let i = 1; i <= playCount; i++){
        let result = input[index];
        if(result === "W"){
            winPointCounter++;
            totalPoints += 3;
        } else if(result === "D"){
            dPoinstCounter ++;
            totalPoints += 1;
        } else if(result === "L"){
            lPointsCounter++;
            totalPoints += 0;
        }
        index++;
    } let winRate = winPointCounter / playCount * 100;
    console.log(`${teamName} has won ${totalPoints} points during this season`);
    console.log(`Total stats:`);
    console.log(`## W: ${winPointCounter}`);
    console.log(`## D: ${dPoinstCounter}`);
    console.log(`## L: ${lPointsCounter}`);
    console.log(`Win rate: ${winRate.toFixed(2)}%`);
}
footballTournament(["Liverpool",
"10",
"W",
"D",
"D",
"W",
"L",
"W",
"D",
"D",
"W",
"W"])