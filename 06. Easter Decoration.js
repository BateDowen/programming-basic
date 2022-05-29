function easterDecoration(input) {
    let basketPrice = 1.5;
    let wreathPrice = 3.8;
    let chocolateBunnyPrice = 7;
    let totalPricePerClient = 0;
    let index = 0;
    let clientsCount = Number(input[index]);
    index++;
    let purchase = input[index];
   for(let i = 1; i <= clientsCount; i++){
       let totalPrice = 0;
       let purchaseCounter = 0;
    while(purchase !== "Finish"){
        purchaseCounter++;
         if(purchase === "basket"){
           totalPrice += basketPrice;
         } else if(purchase === "wreath"){
             totalPrice += wreathPrice;
         } else if(purchase === "chocolate bunny"){
             totalPrice += chocolateBunnyPrice;
         }
         index++;
         purchase = input[index];
    } if(purchaseCounter % 2 == 0){
        totalPrice -= totalPrice * 0.2;
    } console.log(`You purchased ${purchaseCounter} items for ${totalPrice.toFixed(2)} leva.`);
    totalPricePerClient += totalPrice;
    index++;
    purchase = input[index];
   }
   console.log(`Average bill per client is: ${(totalPricePerClient / clientsCount).toFixed(2)} leva.`);
}
easterDecoration(["1",
"basket",
"wreath",
"chocolate bunny",
"wreath",
"basket",
"chocolate bunny",
"Finish"])