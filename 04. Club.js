function  club(input) {
    let index = 0;
    let profit = Number(input[index]);
    index++;
    let cocktail = input[index];
    index++;
    let priceOfCocktail = 0;
    let total = 0;
    while(cocktail !== "Party!"){
      let cocktailCount = Number(input[index]);
      priceOfCocktail = Number(cocktail.length);
      let totalOneCocktail = cocktailCount * priceOfCocktail;
      if (totalOneCocktail % 2 !== 0){
        totalOneCocktail -= totalOneCocktail * 0.25;
    }
      total += totalOneCocktail;
      if(total >= profit){
          console.log(`Target acquired.`);
          console.log(`Club income - ${total.toFixed(2)} leva.`);
          return;
      }
    index++;
    cocktail = input[index];
    index++
    } 
    console.log(`We need ${(profit - total).toFixed(2)} leva more.`);
    console.log(`Club income - ${total.toFixed(2)} leva.`);
}
club(["500",
"Bellini",
"6",
"Bamboo",
"7",
"Party!"])