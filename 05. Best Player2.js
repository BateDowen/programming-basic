function bestPlayer(input) {
    let index = 0;
    let playerName = input[index];
    index++;
    let bestscoore = 0;
    let bestPlayer = "";
    
    while (playerName !== "END") {
        let scoore = Number(input[index]);
        index++;
        let counter = 0;
        if (scoore > bestscoore) {
            bestscoore = scoore;
            bestPlayer = playerName;
            counter++;
        }
        


    }
}
bestPlayer(["Neymar",
"2",
"Ronaldo",
"1",
"Messi",
"3",
"END"])