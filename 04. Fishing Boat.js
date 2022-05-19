function fishingBoat(input){
    const budget = Number(input[0]);
    const season = input[1];
    const countFishmen = Number(input[2]);
    const boatPriceSpring = 3000;
    const boatPriceSummerAutumn = 4200;
    const boatPriceWinter = 2600;
    let price = 0;
    switch(season){
        case "Winter":
            price = boatPriceWinter; 
            break
        case "Spring":
            price = boatPriceSpring;
            break
        case "Summer"||"Autumn":
            price = boatPriceSummerAutumn;
            break
    } 
    if (countFishmen<=6){
        price -= price*0.1;
    } else if(countFishmen>=7 && countFishmen<=11){
        price -= price*0.15;
    } else if(countFishmen>=12){
        price -= price*0.25;
    }
    if(countFishmen%2===0 && season!=="Autumn"){
        price -= price*0.05;
    }
    if(budget>=price){
        const moneyLeft = budget-price;
        console.log(`Yes! You have ${(moneyLeft).toFixed(2)} leva left.`)
    } else {
        const moneyneeded = price - budget;
        console.log(`Not enough money! You need ${(moneyneeded).toFixed(2)} leva.`)
    }
}
fishingBoat(["3000",
"Summer",
"11"])