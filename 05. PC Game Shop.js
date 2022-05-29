function  pcGameShop(input) {
    let index = 0;
    let saledGames = Number(input[index]);
    index++;
    let gamesName = input[index];
    let hearthstone = 0;
    let fornite = 0;
    let overwatch = 0;
    let others = 0;
    for(let i = 1; i <= saledGames; i++){
       if (gamesName === "Hearthstone"){
           hearthstone++;
       } else if (gamesName === "Fornite"){
           fornite++;
       } else if (gamesName === "Overwatch"){
           overwatch++;
       } else {
           others++;
       }
       index++;
       gamesName = input[index];
    }
    let hearthstonePr = hearthstone / saledGames * 100;
    let fornitePr = fornite / saledGames *100;
    let overwatchPr = overwatch / saledGames * 100;
    let othersPr = others / saledGames * 100;
    console.log(`Hearthstone - ${hearthstonePr.toFixed(2)}%`);
    console.log(`Fornite - ${fornitePr.toFixed(2)}%`);
    console.log(`Overwatch - ${overwatchPr.toFixed(2)}%`);
    console.log(`Others - ${othersPr.toFixed(2)}%`);
}
pcGameShop(["3",
"Hearthstone",
"Diablo 2",
"Star Craft 2"])