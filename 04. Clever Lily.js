function CleverLily(input) {
    const age = Number(input[0]);
    const washingMachinePrice = Number(input[1]);
    const toyPrice = Number(input[2]);
    let savedMoney = 0;
    let toyCounter = 0;
    let stolenMoney = 0;
    let addedMoney = 10; 

    for (let i = 1; i <= age; i = i + 1) {

       if (i % 2 === 0){
          savedMoney = savedMoney + addedMoney;
          addedMoney += 10;
          stolenMoney = stolenMoney + 1;

        } else {
           toyCounter = toyCounter + 1;
       }
    }
    let totalToys = toyCounter * toyPrice;
    let totalSavedMoney = (savedMoney + totalToys) - stolenMoney;
     if( totalSavedMoney >= washingMachinePrice){
         console.log(`Yes! ${(totalSavedMoney - washingMachinePrice).toFixed(2)}`);
     } else {
         console.log(`No! ${(washingMachinePrice - totalSavedMoney).toFixed(2)}`);
     }
}
CleverLily(["10",
"170.00",
"6"])