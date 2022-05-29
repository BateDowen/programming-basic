function balls(input) {
    let index = 0;
    let ballsCount = Number(input[index]);
    index++;
    let color = input[index];
    let totalPoints = 0;
    let red = 0;
    let orange = 0;
    let yellow = 0;
    let white = 0;
    let black = 0;
    let other = 0;
    for(let i = 1; i < input.length; i++){
       if (color === "red") {
           totalPoints += 5;
           red++
       }else if (color === "orange") {
           totalPoints += 10;
           orange++;
       } else if (color === "yellow") {
           totalPoints += 15;
           yellow++;
       } else if (color === "white") {
           totalPoints += 20;
           white++;
       } else if (color === "black") {
        Math.round(totalPoints /=2);
           black++;
       } else {
           totalPoints += 0;
           other++;
       }
       index++;
       color = input[index];
    }
    console.log(`Total points: ${Math.round(totalPoints)}`);
    console.log(`Red balls: ${red}`);
    console.log(`Orange balls: ${orange}`);
    console.log(`Yellow balls: ${yellow}`);
    console.log(`White balls: ${white}`);
    console.log(`Other colors picked: ${other}`);
    console.log(`Divides from black balls: ${black}`);

}
balls(["5",
"red",
"red",
"ddd",
"ddd",
"ddd"])