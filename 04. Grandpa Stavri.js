function  grandpaStavri(input) {
    let index = 0
    let daysCount = Number(input[index]);
    index++;
    let totalDegrees = 0;
    let totalLiters = 0
    for(let i=1; i <= daysCount; i++){
        let liters = Number(input[index]);
        index++;
        let degrees = Number(input[index]);
        index++;
        totalLiters += liters;
        totalDegrees += liters * degrees; 

    }
    let avarage = totalDegrees / totalLiters;

    console.log(`Liter: ${totalLiters.toFixed(2)}`);
    console.log(`Degrees: ${avarage.toFixed(2)}`);
    if (avarage < 38) {
        console.log(`Not good, you should baking!`);
    } else if (avarage >= 38 && avarage <= 42){
        console.log(`Super!`);
    } else if (avarage > 42){
        console.log(`Dilution with distilled water!`);
    }
}
grandpaStavri(["2",
"200",
"43",
"200",
"40"])
