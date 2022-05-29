function TransportPrice(input){
const nKilometers =Number(input[0]);
const dayOrnight = input[1];
const taxiTax = 0.70;
const taxiDay = 0.79;
const taxiNight = 0.90;
const bus = 0.09;
const train = 0.06;
let useTaxi = 0.0;

if (dayOrnight === "day"){
 useTaxi= taxiTax + nKilometers*taxiDay;
} else {
  useTaxi = taxiTax+nKilometers*taxiNight;
}

if (nKilometers<20){
    console.log(useTaxi.toFixed(2));
    
} else if(nKilometers<100){
    let useBus = nKilometers*bus;
    console.log(useBus.toFixed(2));

} else{
    let useTrain = nKilometers*train;
    console.log(useTrain.toFixed(2))
}


}
TransportPrice(["180", "night"]);