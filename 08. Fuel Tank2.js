function fuelTank(input){
const fuel = input[0];
const quantityFuel = Number(input[1]);
const clubCard = input[2];
let dieselPrice = 2.33;
let benzinPrice = 2.22;
let gasPrice = 0.93;
let discount=0;
let price =0;


switch (fuel){
    case "Benzin":
        if (clubCard==="Yes"){
             discount = benzinPrice - 0.18;
             price = discount*quantityFuel;
        } else {
            price = benzinPrice*quantityFuel;
        }
        if (quantityFuel>=20&&quantityFuel<=25){ 
            price *= 0.92; 
        } else if (quantityFuel>25){
            price*=0.9;
        } console.log(`${price.toFixed(2)} lv.`);
        break

    case "Gas":
        if (clubCard==="Yes"){
            discount = gasPrice - 0.08;
            price = discount*quantityFuel;
       } else {
           price = gasPrice*quantityFuel;
       }
       if (quantityFuel>=20&&quantityFuel<=25){ 
           price *= 0.92; 
       } else if (quantityFuel>25){
           price*=0.9;
       } console.log(`${price.toFixed(2)} lv.`);
       break

    case "Diesel":
        if (clubCard==="Yes"){
            discount = dieselPrice - 0.12;
            price = discount*quantityFuel;
       } else {
           price = dieselPrice*quantityFuel;
       }
       if (quantityFuel>=20&&quantityFuel<=25){ 
           price *= 0.92; 
       } else if (quantityFuel>25){
           price*=0.9;
       } console.log(`${price.toFixed(2)} lv.`);
       break
}
}
fuelTank(["Benzin","25","No"])