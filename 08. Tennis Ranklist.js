function tennisRanklist(input) {
    let index = 0;

    let tournamentsCount = Number(input[index]);
    index++;
    let startPoinst = Number(input[index]);
    index++;
    let temPoints = 0;
    let winCounter = 0;
    for(let i =0; i <tournamentsCount; i++ ){
        let scoore = input[index];
        index++;

        switch(scoore){
            case "W": 
            temPoints += 2000;
            winCounter++;
            break
            case "F": temPoints += 1200; break
            case "SF": temPoints += 720; break
        }
    }
    let finlPoinst = startPoinst + temPoints;
    let avgPoints = Math.floor(temPoints/tournamentsCount);
    let winGameP = winCounter / tournamentsCount*100;
    console.log(`Final points: ${finlPoinst}`);
    console.log (`Average points: ${avgPoints}`);
    console.log(`${winGameP.toFixed(2)}%`)
}
tennisRanklist(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])