function CelsiustoFahrenheit(input){
const TC = Number(input[0]);
const Tf = TC*1.8+32;
console.log(Tf.toFixed(2));
}
CelsiustoFahrenheit([20]);