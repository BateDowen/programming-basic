function tradeCommissions(input){
const city = input[0];
const sells = Number(input[1]);
let comission = (-1);
 
if (city==="Sofia"){
    if ( sells>=0&&sells<=500){
    comission = 0.05;}
    if (sells>500&&sells<=1000){
    comission = 0.07;}
    if (sells>1000&&sells<=10000){
    comission = 0.08;}
    if (sells>10000){
    comission = 0.12;}
}
if (city==="Varna"){
    if ( sells>=0&&sells<=500){
    comission = 0.045;}
    if (sells>500&&sells<=1000){
    comission = 0.075;}
    if (sells>1000&&sells<=10000){
    comission = 0.10;}
    if (sells>10000){
    comission = 0.13;} 
}
if (city==="Plovdiv"){
    if ( sells>=0&&sells<=500){
    comission = 0.055;}
    if (sells>500&&sells<=1000){
    comission = 0.08;}
    if (sells>1000&&sells<=10000){
    comission = 0.12;}
    if (sells>10000){
    comission = 0.145;}
}
if (comission>=0){
    comission= sells*comission
 console.log(comission.toFixed(2));    
} else {
    console.log("error");
}
}
tradeCommissions(["Plovdiv","499.99"])
