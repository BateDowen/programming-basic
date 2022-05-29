function footballLeague(input) {
    let stadionCappacity = Number(input[0]);
    let fansCount = Number(input[1]);
    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;

    for (let i = 2; i < input.length; i++){
        let sector = input[i];
        if (sector === "A"){
            sectorA++;
        } else if (sector === "B"){
            sectorB++;
        } else if (sector === "V"){
            sectorV++;
        } else if (sector === "G"){
           sectorG++;
        }
    }
    let sectorAProcent = (sectorA / fansCount) * 100;
    let sectorBProcent = (sectorB / fansCount) * 100;
    let sectorVProcent = (sectorV / fansCount) * 100;
    let sectorGProcent = (sectorG / fansCount) * 100;
    let allFanstoStadion = (fansCount / stadionCappacity) * 100;
    console.log(sectorAProcent.toFixed(2)+"%");
    console.log(sectorBProcent.toFixed(2)+"%");
    console.log(sectorVProcent.toFixed(2)+"%");
    console.log(sectorGProcent.toFixed(2)+"%");
    console.log(allFanstoStadion.toFixed(2)+"%");
}
footballLeague([76,
    10,
    "A",
    "V",
    "V",
    "V",
    "G",
    "B",
    "A",
    "V",
    "B",
    "B"])