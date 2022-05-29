function coffeeMachine(input) {
    let drink = input[0];
    let howSweet = input[1];
    let drinksCount = Number(input[2]);
    let esspressoPrice = 0;
    let cappuccinoPirce = 0;
    let teaPrice = 0;
    let price = 0;
    if (drink === "Espresso"){
        
        if(howSweet === "Without"){
            esspressoPrice = 0.9;
        } else if (howSweet === "Normal"){
            esspressoPrice = 1;
        } else if (howSweet === "Extra"){
            esspressoPrice = 1.2;
        }
        price = esspressoPrice
    }
    if (drink === "Cappuccino"){
       
        if(howSweet === "Without"){
            cappuccinoPirce = 1;
        } else if (howSweet === "Normal"){
            cappuccinoPirce = 1.2;
        } else if (howSweet === "Extra"){
            cappuccinoPirce = 1.6;
        }
        price = cappuccinoPirce
    }
    if (drink === "Tea"){
        
        if(howSweet === "Without"){
            teaPrice = 0.5;
        } else if (howSweet === "Normal"){
            teaPrice = 0.6;
        } else if (howSweet === "Extra"){
            teaPrice = 0.7;
        }
        price = teaPrice
    }
    let total = price * drinksCount;
    if (howSweet === "Without"){
        total -= total * 0.35;
    }
    if (drink === "Espresso" && drinksCount>= 5){
    total -= total * 0.25;
    }
    if (total > 15){
        total -= total * 0.2;
    }
    console.log(`You bought ${drinksCount} cups of ${drink} for ${total.toFixed(2)} lv.`);
}
coffeeMachine(["Cappuccino",
"Normal",
"13"])