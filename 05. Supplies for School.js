function SuppliesforSchool(input){
const pens = Number(input[0])*5.8;
const pencils = Number(input[1]*7.2);
const spirt = Number(input[2])*1.2;
const all = (pens + pencils + spirt);
const discount = all - (all*0.25);
console.log(discount);
}
SuppliesforSchool (["2 ","3 ","4 ","25"])