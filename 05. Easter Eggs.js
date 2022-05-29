function easterEggs(input) {
  let index = 0;
  let eggsNum = Number(input[0]);
  index++;
  let colorOfEgs = input[index];
  let red = 0;
  let green = 0;
  let orange = 0;
  let blue = 0;
  let maxEgs = 0;
  let colorMaxEgs = 0
  for(let i = 0; i <= eggsNum; i++){
      if(colorOfEgs === "red"){
          red++;
          if(maxEgs < red){
              colorMaxEgs = colorOfEgs;
              maxEgs = red
          }
      } else if(colorOfEgs === "green"){
          green++;
          if(maxEgs < green){
            colorMaxEgs = colorOfEgs;
            maxEgs = green;
        }
      } else if (colorOfEgs === "orange"){
          orange++;
          if(maxEgs < orange){
            colorMaxEgs = colorOfEgs;
            maxEgs = orange;
        }
      } else if (colorOfEgs === "blue"){
          blue++;
          if(maxEgs < blue){
            colorMaxEgs = colorOfEgs;
            maxEgs = blue;
        }
      }
      index++;
      colorOfEgs = input[index];
  } 
  console.log(`Red eggs: ${red}`);
console.log(`Orange eggs: ${orange}`);
console.log(`Blue eggs: ${blue}`);
console.log(`Green eggs: ${green}`);
console.log(`"Max eggs: ${maxEgs} -> ${colorMaxEgs}`);

}
easterEggs(["7",
"orange",
"blue",
"green",
"green",
"blue",
"red",
"green"])