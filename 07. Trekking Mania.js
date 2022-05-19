function trekkingMania(input) {
    let groupCount = Number(input[0]);
    let peopleCounter = 0; 
    let allPeople = 0;
    let musala = 0;
    let monblan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    for (let i = 1; i < input.length; i++){
        allPeople += Number(input[i])
        peopleCounter = Number(input[i]);
        
        if (peopleCounter <= 5){
            musala+=peopleCounter;
        } else if (peopleCounter >= 6 && peopleCounter <= 12){
            monblan += peopleCounter;
        } else if ( peopleCounter >= 13 && peopleCounter <= 25){
            kilimanjaro += peopleCounter;
        } else if (peopleCounter >= 26 && peopleCounter <= 40){
            k2 += peopleCounter;
        } else {
            everest += peopleCounter;
        }

        
    } 
    let procentMusala = musala / allPeople * 100;
    let procentMonblan = monblan / allPeople * 100;
    let procentKilimanjaro = kilimanjaro / allPeople * 100;
    let procentK2 = k2 / allPeople * 100;
    let procentEverest = everest / allPeople *100;
    console.log(`${procentMusala.toFixed(2)}%`);
    console.log(`${procentMonblan.toFixed(2)}%`);
    console.log(`${procentKilimanjaro.toFixed(2)}%`);
    console.log(`${procentK2.toFixed(2)}%`);
    console.log(`${procentEverest.toFixed(2)}%`);

}
trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])