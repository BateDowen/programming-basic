function Oscars(input) {
    let index = 0;
    let actorsName = input[index];
    index++;
    let academyPoints = Number(input[index]);
    index++;
    let jury = Number(input[index]);
    index++;
    let actorPoints = 0;
    for(let i = 1; i <= jury; i++){
        let juryName = input[index];
        index++;
        let juryPoints = Number(input[index]);
        index++;
        let juryNameLength = juryName.length
        actorPoints = (juryNameLength * juryPoints) / 2
        academyPoints += actorPoints
        if (academyPoints > 1250.5) {
            console.log(`Congratulations, ${actorsName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
            return;
        }
    }
    console.log(`Sorry, ${actorsName} you need ${(1250.5 - academyPoints).toFixed(1)} more!`);
}
Oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])