function  nameGame(input) {
    let index = 0;
    let name = input[index];
    let winer ="";
    let newWiner ="";
    let winPoints = 0;
    let newWinPoints = 0;
    let num = 0;
    let simbol = "";
    let numberS = 0;
    while(name !== "Stop"){
        let points = 0;
        for(let i = 0; i < name.length; i++){
            index++
            num = Number(input[index]);
            simbol = name.charAt(i)
            numberS = simbol.charCodeAt(0)
            if (num === numberS){
              points += 10;
            } else {
                points += 2;
            }
        }
        winer = name;
        if(points > winPoints){
            newWiner = winer;
            newWinPoints = points
        }
        winPoints = points;
        index++;
        name = input[index];
    } console.log(`The winner is ${newWiner} with ${newWinPoints} points!`);
}
nameGame(["Pesho",
"124",
"34",
"111",
"97",
"99",
"Gosho",
"98",
"124",
"88",
"76",
"18",
"Stop"])
