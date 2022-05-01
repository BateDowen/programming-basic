function dvorove(input){
var price = 7.61*Number(input[0]);
var discount = 0.18*price;

    console.log(`The final price is: ${price - discount} lv.` );
    console.log(`The discount is: ${discount} lv.`)
}
dvorove([550]);