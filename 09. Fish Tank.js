function FishTank (input){
const lenth = Number(input[0]);
const width = Number(input[1]);
const height = Number(input[2]);
const percent = Number (input[3]/100);
const capacity = lenth * width * height;
const capacityInLiters = capacity*0.001;
const LitresNeed = capacityInLiters * (1-percent);
console.log(LitresNeed)
}
 FishTank(["85 ","75 ","47 ","17 "])
 FishTank(["105 ","77 ","89 ","18.5 "])

//  обем на аквариумa: 85 * 75 * 47 = 299625 см3
// обем в литри: 299625 * 0.001 или  299625 / 1000 => 299.625 литра
// заето пространство: 17% = 0.17
// нужни литри: 299.625 * (1 - 0.17) = 248.68875 литра