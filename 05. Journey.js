function journey(input){
const budget = Number(input[0]);
const season = input[1].toLowerCase();
let price = 0;
       if (budget<=100){
           if(season==="summer"){
           price=budget*0.3;
           console.log("Somewhere in Bulgaria")
           console.log(`Camp - ${(price.toFixed(2))}`)
        } else {
            price=budget*0.7;
            console.log("Somewhere in Bulgaria")
            console.log(`Hotel - ${(price.toFixed(2))}`)
        } 
       } else if (budget<=1000){
            if(season==="summer"){
            price=budget*0.4;
            console.log("Somewhere in Balkans")
            console.log(`Camp - ${(price.toFixed(2))}`)
       } else {
           price = budget*0.8;
           console.log("Somewhere in Balkans")
           console.log(`Hotel - ${(price.toFixed(2))}`)
       } 
    } else {
        price = budget*0.9;
        console.log("Somewhere in Europe")
        console.log(`Hotel - ${(price.toFixed(2))}`)
    }

}


journey(["150.toFixed(2)0", "summer"])