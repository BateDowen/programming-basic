function bills(input) {
  let water = 20;
  let internet = 15;
  let month = Number(input[0]);
  let electricity = Number(input[1]);
  let others = 0;
  let electricityBill = 0;
  let electricityBillCount = 0;
  let waterBill = water * month;
  let internetBill = internet * month;
   for (let i = 1; i < input.length; i++){
       electricityBill = Number(input[i]);
       electricityBillCount += electricityBill;
       others += water + internet + electricityBill + (water + internet + electricityBill) * 0.2;
       
       
   } let avarage = (electricityBillCount + waterBill + internetBill + others) / month;
   console.log(`Electricity: ${electricityBillCount.toFixed(2)} lv`);
   console.log(`Water: ${waterBill.toFixed(2)} lv`);
   console.log(`Internet: ${internetBill.toFixed(2)} lv`);
   console.log(`Other: ${others.toFixed(2)} lv`);
   console.log(`Average: ${avarage.toFixed(2)} lv`);
  
}
bills([5, 68.63, 89.25, 132.53, 93.53, 63.22]);
