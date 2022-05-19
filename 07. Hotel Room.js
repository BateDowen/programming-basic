function hotelRoom(input){
const mayAndOctoberStudioPrice  = 50;
const mayAndOctoberApartmentprice = 65;
const juneAndSeptemberStudioPrice = 75.2;
const juneAndSeptemberApartmentPrice = 68.7;
const julyAndAugustStudioPrice = 76;
const julyAndAugustApartmentPrice = 77;
const season = input[0]
const nights = Number(input[1]);
let priceOfApartment=0;
let priceOfStudio = 0;
switch(season){
    case "May":
    case "October":
        priceOfApartment = nights*mayAndOctoberApartmentprice;
        priceOfStudio = nights * mayAndOctoberStudioPrice;
        if (nights>7&&nights<14){
            priceOfStudio -= priceOfStudio * 0.05;
        } else if (nights>14){
            priceOfStudio -= priceOfStudio * 0.3;
        }
        break;
    case "June":
    case "September":
        priceOfApartment = nights*juneAndSeptemberApartmentPrice;
        priceOfStudio = nights*juneAndSeptemberStudioPrice;
        if (nights>14){
            priceOfStudio -= priceOfStudio*0.2;
        }
        break;
    case "July":
    case "August":
        priceOfApartment = nights * julyAndAugustApartmentPrice;
        priceOfStudio = nights * julyAndAugustStudioPrice;
        break;
} if (nights>14){
    priceOfApartment -= priceOfApartment*0.1;
}
console.log(`Apartment: ${priceOfApartment.toFixed(2)} lv.`)
console.log(`Studio: ${priceOfStudio.toFixed(2)} lv.`)
}
hotelRoom(["May",
"15"])