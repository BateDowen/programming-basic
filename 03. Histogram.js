function Histogram(input) {
  const n = Number(input[0]);
   let p1 = 0;
   let p2 = 0;
   let p3 = 0;
   let p4 = 0;
   let p5 = 0;
  for (let i = 1; i <= n; i++) {
      let num = Number(input[i]);
      if(num<200){
        p1++;
      } else if (num>=200 && num<=399){
          p2++;
      } else if (num>=400 && num<=599){
          p3++;
      } else if (num>=600 && num<=799){
          p4++;
      } else {
          p5++;
      }
  } 
      let p1Propcentage = p1/n*100;
      let p2Propcentage = p2/n*100;
      let p3Propcentage = p3/n*100;
      let p4Propcentage = p4/n*100;
      let p5Propcentage = p5/n*100;

      console.log(`${p1Propcentage.toFixed(2)}%`);
      console.log(`${p2Propcentage.toFixed(2)}%`);
      console.log(`${p3Propcentage.toFixed(2)}%`);
      console.log(`${p4Propcentage.toFixed(2)}%`);
      console.log(`${p5Propcentage.toFixed(2)}%`);

}
Histogram(["3", "1", "2", "999"]);
