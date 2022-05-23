function vacation(input) {

  let moneyNeeded = Number(input[0]);
  let moneyHave = Number(input[1]);
  let index = 2;
  let daysSpend = 0;
  let dayCounter = 0;

  while(moneyHave < moneyNeeded){
        let action = input[index];
        index++;
        let amountOfMoney = Number(input[index]);
        dayCounter++;
        switch(action){
            case "spend":
                moneyHave -= amountOfMoney;
                if (moneyHave < 0) {
                    moneyHave = 0;
                } 
                daysSpend++;
                break;
            case "save":
                 moneyHave += amountOfMoney;
                 daysSpend = 0;
                 break;
        }
        if(daysSpend >= 5){
            console.log(`You can't save the money.`)
            console.log(dayCounter);
            break;
        }  
        index++;
  } 
  if(moneyHave >= moneyNeeded){
      console.log(`You saved the money for ${dayCounter} days.`)
  }
  
}

vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
