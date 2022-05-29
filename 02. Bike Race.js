function bikeRace(input) {
    const trialJuniorTax=5.5;
    const trialSeniorTax=7;
    const crossCountryJuniorTax = 8;
    const crossCountrySeniorTax=9.5;
    const juniordownhillTax=12.25;
    const seniordownhillTax=13.75;
    const roadJuniorTax = 20;
    const roadSeniorTax = 21.50;
    const juniors = Number (input[0]);
    const seniors = Number(input[1]);
    const typeCompetition = input[2];
    let donatedSumAfterTax = 0;
    switch (typeCompetition){
        case "trial":
        donatedSumAfterTax = ((juniors*trialJuniorTax)+(seniors*trialSeniorTax))*0.95;
        break;
        case "cross-country":
            if(juniors+seniors>=50){
            donatedSumAfterTax = ((juniors*crossCountryJuniorTax)+(seniors*crossCountrySeniorTax))*0.70;
            } else {
                donatedSumAfterTax = ((juniors*crossCountryJuniorTax)+(seniors*crossCountrySeniorTax))*0.95;
            } break;
        case "downhill":
            donatedSumAfterTax = ((juniors*juniordownhillTax)+(seniors*seniordownhillTax))*0.95;
            break;
        case "road":
            donatedSumAfterTax = ((juniors*roadJuniorTax)+(seniors*roadSeniorTax))*0.95;
            break;
    } console.log(donatedSumAfterTax.toFixed(2))


}
bikeRace(["10","20","trial"]);