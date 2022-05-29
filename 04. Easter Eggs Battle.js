function easterEggsBattle(input) {
    let index = 0;
    let firstPlayerEggs = Number(input[index]);
    index++;
    let secondPlayerEggs = Number(input[index]);
    index++;
    let whoWin = input[index];
    while(whoWin !== "End"){
        if (whoWin === "one"){
            secondPlayerEggs -= 1;
        } else {
            firstPlayerEggs -= 1;
        }
        if (firstPlayerEggs === 0){
            console.log(`Player one is out of eggs. Player two has ${secondPlayerEggs} eggs left.`);
            return;
        } else if (secondPlayerEggs === 0){
            console.log(`Player two is out of eggs. Player one has ${firstPlayerEggs} eggs left.`);
            return;
        }
        index++;
        whoWin = input[index];
    }
    console.log(`Player one has ${firstPlayerEggs} eggs left.`);
    console.log(`Player two has ${secondPlayerEggs} eggs left.`);
}
easterEggsBattle([2,
    6,
    "one",
    "two",
    "two",])