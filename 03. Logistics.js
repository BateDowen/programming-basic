function  logistics(input) {
   let weightCount = Number(input[0]);
   let bus = 0;
   let truck = 0;
   let train = 0;
const priceBus = 200;
const priceTruck = 175;
const priceTrain = 120;
let totalWeightOfCargo = 0;
   for(let i = 1; i <= weightCount; i++){
       let weightOfCargo = Number(input[i]);
       totalWeightOfCargo += weightOfCargo;

       if(weightOfCargo <= 3){
           bus+=weightOfCargo;
       } else if(weightOfCargo >= 4 && weightOfCargo <= 11){
           truck+=weightOfCargo;
       } else if(weightOfCargo >= 12){
           train+=weightOfCargo;
       } 
   } 

let avgPrice = (bus*priceBus + truck*priceTruck + train*priceTrain) / totalWeightOfCargo;
let procentBus = bus/totalWeightOfCargo*100;
let procentTruck = truck/totalWeightOfCargo*100;
let procentTrain = train/totalWeightOfCargo*100;
console.log(avgPrice.toFixed(2));
console.log(procentBus.toFixed(2) + "%")
console.log(procentTruck.toFixed(2) + "%")
console.log(procentTrain.toFixed(2) + "%")

   
} 

logistics(["4","1","5","16","3"])