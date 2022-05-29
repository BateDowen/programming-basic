function WeatherForecast(input){
let weather = input[0];
let result = "";
if (weather >=26.00 && weather<=35.00){
    result = "Hot"
} else if (weather>=20.1 && weather<=25.9){
    result = "Warm"
} else if(weather>=15.00 && weather<=20.00){
    result="Mild"
} else if(weather>=12.00 && weather<=14.9){
    result = "Cool"
} else if (weather>=5.00 && weather<=11.9){
    result = "Cold"
}
 else {
    result = "unknown"
}
console.log(result)
}
WeatherForecast(["11.5"])

// 26.00 - 35.00	Hot
// 20.1 - 25.9	Warm
// 15.00 - 20.00	Mild
// 12.00 - 14.9	Cool
// 5.00 - 11.9	Cold
