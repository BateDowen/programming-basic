function Flowers(input) {
const countBuyedHrizantemi = Number(input[0]);
const countBuyedRozi = Number(input[1]);
const countBuyedLaleta = Number(input[2]);
const season = input[3];
const isItHolyday = input[4];
const bucketArrangement = 2;
const priceHrizantemiSpringSummer = 2;
const priceHrizantemiAutumnWinter = 3.75;
const priceRoziSpringSummer = 4.10;
const priceRoziAutumnWinetr = 4.50;
const priceLaletaSpringSummer = 2.50;
const priceLaletaAutunWinter = 4.15;
let price = 0;
let allCountFlower = countBuyedHrizantemi + countBuyedLaleta + countBuyedRozi;
if (season==="Spring"){
    price = (countBuyedLaleta*priceLaletaSpringSummer)+(countBuyedHrizantemi*priceHrizantemiSpringSummer)+
    (countBuyedRozi*priceRoziSpringSummer);
    if(isItHolyday==="Y"){
        price += price*0.15;
    }
    if (countBuyedLaleta>=7){
        price-=price*0.05;
    }
} else if (season==="Winter") {
    price = ((countBuyedHrizantemi*priceHrizantemiAutumnWinter)+(countBuyedLaleta*priceLaletaAutunWinter)+
    (countBuyedRozi*priceRoziAutumnWinetr));
    if( isItHolyday==="Y"){
        price+= price*0.05;
    }
    if(countBuyedRozi>=10){
        price -= price*0.1;
    }
} else if(season==="Autumn"){
    price = (countBuyedHrizantemi*priceHrizantemiAutumnWinter)+(countBuyedLaleta*priceLaletaAutunWinter)+
    (countBuyedRozi*priceRoziAutumnWinetr);
} else if (season==="Summer"){
    price = (countBuyedHrizantemi*priceHrizantemiSpringSummer)+(countBuyedLaleta*priceLaletaSpringSummer)+
    (countBuyedRozi*priceRoziSpringSummer);
} 
if (allCountFlower>=20){
    price -= price*0.2;
}
 console.log(`${(price + bucketArrangement).toFixed(2)}`)



} 
Flowers(["3","10","9","Winter","N"])