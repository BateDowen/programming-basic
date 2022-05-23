function reportSystem(input) {
    let index = 0;
    let totalSum = Number(input[index]);
    index++;
    let productsPrice = input[index];
    let sum = 0;
    let counter = 0;
    let cashPay = 0;
    let creditPay = 0;
    let cashCounter = 0;
    let creditCounter = 0;
    while ( productsPrice !== "End"){
        productsPrice = input[index];
        index++;
        counter++;
        if (productsPrice === "End"){
            console.log(`Failed to collect required money for charity.`);
            return;
        }
        if (counter % 2 === 0){
            if ( productsPrice < 10){
                console.log(`Error in transaction!`);
            } else {
                creditCounter++;
                creditPay += productsPrice;
                sum += productsPrice;
            console.log(`Product sold!`);
            }
        } else if (counter % 2 !== 0){
            if ( productsPrice > 100){
                console.log(`Error in transaction!`);
            } else {
                cashCounter++;
                cashPay += productsPrice;
                sum += productsPrice;
            console.log(`Product sold!`);
            }
        }
        if (sum >= totalSum){
         let averageCC = creditPay / creditCounter;
         let averageCS =  cashPay / cashCounter;
         console.log(`Average CS: ${averageCS.toFixed(2)}`);
         console.log(`Average CC: ${averageCC.toFixed(2)}`);
         return;
        } 
    } 
}
reportSystem([500,
    120,
    8,
    63,
    256,
    78,
    317
    
])