function HousePainting(input){
const X = Number(input[0]);
const Y = Number(input[1]);
const H = Number(input[2]);
let sideWall = X*Y;
let window = 1.5*1.5;
let sideWallTogether = 2*sideWall-2*window;
let backWall = X*X;
let entrance = 1.2*2;
let backAndEntrance = 2*backWall-entrance;
let Sidearea = sideWallTogether+backAndEntrance;
let greenPaint = Sidearea/3.4;
console.log(greenPaint.toFixed(2))

const RoofRectangulars = 2 * (X*Y);
const RoofTriangles = 2*(X*H/2);
let RoofArea = RoofRectangulars + RoofTriangles;
let redPaint = RoofArea/4.3;
console.log(redPaint.toFixed(2)) 
}
HousePainting(["6","10","5.2"])

// СТЕНИ
// Страничната стена е с площ – 6*10 = 60;
// Прозорецът е с площ = 1.5*1.5 = 2.25;
// Двете страници са общо – 2*60 - 2*2.25 = 115.5;
// Задната стена – 6*6 = 36; Вход: 1.2*2 = 2.4
// Общо предна и задна – 2*36 - 2.4 = 69.6
// ОБЩА ПЛОЩ: 115.5 + 69.6 = 185.1 м2
// Зелена боя = 185.1 / 3.4 = 54.44 литра
// ПОКРИВ
// Двата правоъгълника на покрива – 2 * (6*10) = 120
// Двата триъгълниците – 2 * (6*5.2 / 2) = 2 * 15.6 = 31.2
// ОБЩА ПЛОЩ: 120 + 31.2 = 151.2 м2
// Червена боя = 151.2 / 4.3 = 35.16 литра