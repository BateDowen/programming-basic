function newHouse(input){
const priceOfRoses = 5;
const priceOfDahlias = 3.8;
const priceOfTulips = 2.8;
const priceOfNarcissus = 3;
const priceOFGladiolus = 2.5;
const flowers = input[0];
const count = Number(input[1]);
const budget = Number(input[2]);
let price=0;
switch(flowers){
    case "Roses":
        if (count>80){
            price-=priceOfRoses*count*0.1;
        }
     price+= priceOfRoses*count; 
     break
     case "Dahlias":
        if (count>90){
            price-=priceOfDahlias*count*0.15;
        }
     price+= priceOfDahlias*count;
     break
     case "Tulips":
        if (count>80){
            price-=priceOfTulips*count*0.15;
        }
     price+= priceOfTulips*count;
     break
     case "Narcissus":
        if (count<120){
            price+=priceOfNarcissus*count*0.15;
        }
     price+= priceOfNarcissus*count;
     break
     case "Gladiolus":
        if (count<80){
            price+=priceOFGladiolus*count*0.2;
        }
     price+= priceOFGladiolus*count; 
     break 
}
    if (budget>=price){
    const moneyLeft = budget-price
    console.log(`Hey, you have a great garden with ${count} ${flowers} and ${(moneyLeft).toFixed(2)} leva left.`)
}   else {
    const moneyneeded = price - budget
    console.log(`Not enough money, you need ${(moneyneeded).toFixed(2)} leva more.`)
} 
}
newHouse(["Narcissus",
"119",
"360"])