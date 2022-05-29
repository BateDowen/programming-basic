function movieDestination(input) {
   let budget = Number(input[0]);
   let city = input[1];
   let season = input[2];
   let days = Number(input[3]);
   let oneDayPrice = 0;
   switch(season){
       case "Winter":
           switch(city){
               case "Dubai": oneDayPrice = 45000;break;
               case "Sofia": oneDayPrice = 17000;break;
               case "London": oneDayPrice = 24000;break;
           } break;
        case "Summer":
            switch(city){
               case "Dubai": oneDayPrice = 40000;break;
               case "Sofia": oneDayPrice = 12500;break;
               case "London": oneDayPrice = 20250;break;
            } break;
   }    
   let total = 0;
   total = oneDayPrice * days;
   if (city === "Dubai") {
       total -= total * 0.3;
   } else if (city === "Sofia") {
       total += total * 0.25
   }
   if (budget >= total) {
       console.log(`The budget for the movie is enough! We have ${(budget - total).toFixed(2)} leva left!`);
   } else {
       console.log(`The director needs ${(total - budget).toFixed(2)} leva more!`);
   }
}
movieDestination(["400000",
"Sofia",
"Winter",
"20"])