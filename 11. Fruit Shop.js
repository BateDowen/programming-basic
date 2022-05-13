function fruitShop(input) {
  const fruit = input[0];
  const day = input[1];
  const quantity = Number(input[2]);
  let price = 0;
if(day==="Monday"||day==="Tuesday"||day==="Wednesday"||day==="Thursday"||day==="Friday"
||day==="Saturday"||day==="Sunday" && fruit==="banana"||fruit==="apple"||fruit==="orange"
||fruit==="grapefruit"||fruit==="kiwi"||fruit==="pineapple"||fruit==="grapes"){ 
  if (day === "Monday") {
    if(fruit === "banana"){
          price = quantity * 2.50;}
    if (fruit === "apple"){
          price = quantity * 1.20;}
    if(fruit === "orange"){
          price = quantity * 0.85;}
    if (fruit === "grapefruit"){
          price = quantity * 1.45;}
    if (fruit === "kiwi"){
          price = quantity * 2.70;}
    if (fruit === "pineapple"){
          price = quantity * 5.50;}
    if (fruit === "grapes"){
          price = quantity * 3.85;}
    console.log(price.toFixed(2));
  }
  if (day === "Tuesday") {
    if(fruit === "banana"){
          price = quantity * 2.50;}
    if (fruit === "apple"){
          price = quantity * 1.20;}
    if(fruit === "orange"){
          price = quantity * 0.85;}
    if (fruit === "grapefruit"){
          price = quantity * 1.45;}
    if (fruit === "kiwi"){
          price = quantity * 2.70;}
    if (fruit === "pineapple"){
          price = quantity * 5.50;}
    if (fruit === "grapes"){
          price = quantity * 3.85;}
    console.log(price.toFixed(2));
  }
  if (day === "Wednesday") {
    if(fruit === "banana"){
          price = quantity * 2.50;}
    if (fruit === "apple"){
          price = quantity * 1.20;}
    if(fruit === "orange"){
          price = quantity * 0.85;}
    if (fruit === "grapefruit"){
          price = quantity * 1.45;}
    if (fruit === "kiwi"){
          price = quantity * 2.70;}
    if (fruit === "pineapple"){
          price = quantity * 5.50;}
    if (fruit === "grapes"){
          price = quantity * 3.85;}
    console.log(price.toFixed(2));
  }
  if (day === "Thursday") {
    if(fruit === "banana"){
          price = quantity * 2.50;}
    if (fruit === "apple"){
          price = quantity * 1.20;}
    if(fruit === "orange"){
          price = quantity * 0.85;}
    if (fruit === "grapefruit"){
          price = quantity * 1.45;}
    if (fruit === "kiwi"){
          price = quantity * 2.70;}
    if (fruit === "pineapple"){
          price = quantity * 5.50;}
    if (fruit === "grapes"){
          price = quantity * 3.85;}
    console.log(price.toFixed(2));
  }
  if (day === "Friday") {
    if(fruit === "banana"){
          price = quantity * 2.50;}
    if (fruit === "apple"){
          price = quantity * 1.20;}
    if(fruit === "orange"){
          price = quantity * 0.85;}
    if (fruit === "grapefruit"){
          price = quantity * 1.45;}
    if (fruit === "kiwi"){
          price = quantity * 2.70;}
    if (fruit === "pineapple"){
          price = quantity * 5.50;}
    if (fruit === "grapes"){
          price = quantity * 3.85;}
    console.log(price.toFixed(2));
  }
  if (day === "Saturday" || day==="Sunday") {
    if(fruit === "banana"){
          price = quantity * 2.70;}
    if (fruit === "apple"){
          price = quantity * 1.25;}
    if(fruit === "orange"){
          price = quantity * 0.90;}
    if (fruit === "grapefruit"){
          price = quantity * 1.60;}
    if (fruit === "kiwi"){
          price = quantity * 3.00;}
    if (fruit === "pineapple"){
          price = quantity * 5.60;}
    if (fruit === "grapes"){
          price = quantity * 4.20;}
    console.log(price.toFixed(2)); 
} 
} else { 
    console.log("error") 
}
}
fruitShop(["kiwi", "Monday", "2.5"]);
