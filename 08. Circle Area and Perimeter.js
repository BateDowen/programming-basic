function CircleAreaandPerimeter(input){
const R = Number(input[0]);
let S = Math.PI*R*R;
console.log(S.toFixed(2))
let Perimeter = 2*Math.PI*R;
console.log(Perimeter.toFixed(2))
}
CircleAreaandPerimeter([3])