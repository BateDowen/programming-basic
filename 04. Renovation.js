function renovation(input) {
    let index = 0;
    let hight = Number(input[index]);
    index++;
    let width = Number(input[index]);
    index++;
    let nonPaintPlace = Number(input[index]);
    index++;
    let nonPaintPlacePr = nonPaintPlace / 100;
    let walls = 4;
    let totalPaintedPlace = 0;
    totalPaintedPlace = hight * width * walls;
    totalPaintedPlace -= totalPaintedPlace * nonPaintPlacePr;
    let paintLiters = input[index];
    while(paintLiters !== "Tired!"){
        paintLiters = Number(input[index]);
        totalPaintedPlace -= paintLiters;
        if (totalPaintedPlace < 0){
            console.log(`All walls are painted and you have ${Math.abs(Math.round(totalPaintedPlace))} l paint left!`);
            return;
        } else if(totalPaintedPlace === 0){
            console.log(`All walls are painted! Great job, Pesho!`);
            return;
        }
    index++;
    paintLiters = input[index];
    }
    console.log(`${Math.round(totalPaintedPlace)} quadratic m left.`);
}
renovation(["2",
"3",
"25",
"6",
"7",
"8"])