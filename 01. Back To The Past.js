function  backToThePast(input){
let ageIvancho = 17;
let spendMoney = 12000;
let moneyHeritage = Number(input[0]);;
let year = Number(input[1]);
for ( let i = 1800; i <= year; i++){
    if (i % 2 === 0){
        ageIvancho += 1;
        moneyHeritage-=spendMoney;
    } else {
        ageIvancho += 1;
        moneyHeritage-=(spendMoney + (ageIvancho * 50));
    }
    
}

if (moneyHeritage>=0){

console.log(`Yes! He will live a carefree life and will have ${moneyHeritage.toFixed(2)} dollars left.`);
} else {
    console.log(`He will need ${Math.abs(moneyHeritage.toFixed(2)).toFixed(2)} dollars to survive.`)
}


}
backToThePast(["100000.15","1808"])