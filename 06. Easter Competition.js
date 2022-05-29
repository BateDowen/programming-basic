function easterCompetition(input) {
    let index = 0;
    let countOfBreads = Number(input[index]);
    index++;
    let bakersName = input[index];
    index++;
    let grade = (input[index]);
    let totalPoints = 0;
    let bigestPoints = 0;
    let points = 0;
    let winer = "";
    for (let i = 1; i <= countOfBreads; i++){
        while (grade !== "Stop"){
        points = Number(input[index]);
        totalPoints += points;
        index++;
        grade = (input[index]);
        
        }  console.log(`${bakersName} has ${totalPoints} points.`);
         if (bigestPoints < totalPoints){
             bigestPoints = totalPoints; 
             console.log(`${bakersName} is the new number 1!`);
            winer = bakersName;
         }
       
        index++;
         
        bakersName = input[index];
        index++;
        grade = (input[index]);
       totalPoints = 0;
    } 
    console.log(`${winer} won competition with ${bigestPoints} points!`);
    
}
easterCompetition(["2",
"Chef Angelov",
"9",
"9",
"9",
"Stop",
"Chef Rowe",
"10",
"10",
"10",
"10",
"Stop"])