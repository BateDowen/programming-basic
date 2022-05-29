function  bestPlayer(input) {
    let index = 0;
    let player = input[index];
    index++;
    let score = Number(input[index]);
    // index++;
    let bestPlayer = "";
    let bestScore = 0;
    let newBestScore = 0;
    let newBestPlayer = "";
    while (player !== "END") {
        
        bestPlayer = player;
        if (score > bestScore) {
            newBestPlayer = player;
            newBestScore = score;
            if (score >= 10) {
                break;
            }
        }
        bestScore = score;
        index++;
        player = input[index];
        index++;
        score = Number(input[index]);
    } 
    console.log(`${newBestPlayer} is the best player!`);
    if (newBestScore >= 3) {
        console.log(`He has scored ${newBestScore} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${newBestScore} goals.`);
    }
}
bestPlayer(["Silva",
"5",
"Harry Kane",
"10"])