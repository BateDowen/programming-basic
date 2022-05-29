function Harvest(input){
const Xmeterloze = Number(input[0]);
const YoneMeterloze = Number(input[1]);
const ZlitersNeeded = Number(input[2]);
const workersNumber = Number(input[3]);
const totalGrape = Xmeterloze*YoneMeterloze;
const wine = 0.4*totalGrape/2.5;
if (wine<ZlitersNeeded){
    console.log(`It will be a tough winter! More ${Math.floor(ZlitersNeeded-wine)} liters wine needed.`)
} else{
    let leftWine = wine-ZlitersNeeded;
    console.log(`Good harvest this year! Total wine: ${wine} liters.`)
    console.log(`${Math.round(leftWine)} liters left -> ${Math.round(leftWine/workersNumber)} liters per person.`)
}

}
Harvest([650,2,175,3])