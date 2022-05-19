function cinema(input) {
const projection = input[0];
const row = Number(input[1]);
const column = Number(input[2]);
let full = row*column;
let income = 0.0;

 if (projection==="Premiere"){
    income = full*12.00}
 if(projection=== "Normal"){
    income = full*7.50;}
 if(projection=== "Discount"){
    income = full*5.00;}
 console.log(`${income.toFixed(2)} leva.`)
} 


cinema(["Premiere", "10", "12"]);
