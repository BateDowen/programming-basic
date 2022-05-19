function Oscars(input) {
    index = 0;
    let actorName = input[index];
    index++;
    let points = Number(input[index]);
    index++;
    let juryCount = Number(input[index]);
    index++;
    let isNominee = false

    for(let i = 0; i < juryCount; i++){
        let name = input[index];
        index++;
        let temPoints = Number(input[index]);
        index++;

        points += name.length * temPoints / 2
        if (points > 1250.5){
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(1)}!`)
            isNominee = true;
            break;
        }
    }
    if (!isNominee){
        let diff = Math.abs(points - 1250.5);
        console.log(`Sorry, ${actorName} you need ${diff.toFixed(1)} more!`);
    }
}
Oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])