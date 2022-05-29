function WeatherForecast(input){
    let weather = input[1];
    if (weather=="sunny"){
        console.log("It's warm outside!");
    } else {
        console.log("It's cold outside!")
    }

}
WeatherForecast(["sunny"], ["cloudy"], ["snowy"])