function matchTickets(input){
const VIPTicket = 499.99;
const NormalTicket = 249.99;
const budget = Number(input[0]);
const typeOfTiket = input[1];
const countOfPeople = Number(input[2]);
let transportPrice = 0;
let totalPrice = 0;
let budgetLeft = 0;
if(countOfPeople<=4){
    transportPrice = budget*0.75;
    if(typeOfTiket==="Normal"){ 
      totalPrice = countOfPeople * NormalTicket;
      budgetLeft = budget - transportPrice
      if(totalPrice<=budgetLeft){
      const moneyLeft = budgetLeft - NormalTicket;
      console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
      } else {
          const budgetNeeded = transportPrice - budget
          const moneyNeeded = NormalTicket - budgetNeeded
          console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`)
      }
 
    } else if(typeOfTiket==="VIP"){ 
        totalPrice = countOfPeople * VIPTicket;
        budgetLeft = budget - transportPrice;
        if(totalPrice<=budgetLeft){
        const moneyLeft = budgetLeft - totalPrice;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
        } else {
            const moneyNeeded = totalPrice - budgetLeft;
            console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`)
        }
        
    }

 } else if(countOfPeople>=5&&countOfPeople<=9){
    transportPrice = budget*0.60;
    if(typeOfTiket==="Normal"){ 
      totalPrice = countOfPeople * NormalTicket;
      budgetLeft = budget - transportPrice
      if(totalPrice<=budgetLeft){
      const moneyLeft = budgetLeft - NormalTicket;
      console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
      } else {
          const budgetNeeded = transportPrice - budget
          const moneyNeeded = NormalTicket - budgetNeeded
          console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`)
      }
 
    } else if(typeOfTiket==="VIP"){ 
        totalPrice = countOfPeople * VIPTicket;
        budgetLeft = budget - transportPrice;
        if(totalPrice<=budgetLeft){
        const moneyLeft = budgetLeft - totalPrice;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
        } else {
            const moneyNeeded = totalPrice - budgetLeft;
            console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`)
        }
        
    }

 } else if(countOfPeople>=10&&countOfPeople<=24){
    transportPrice = budget*0.50;
    if(typeOfTiket==="Normal"){ 
      totalPrice = countOfPeople * NormalTicket;
      if(totalPrice<=budget){
          budgetLeft = budget - transportPrice
      const moneyLeft = budgetLeft - NormalTicket;
      console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
      } else {
          const budgetNeeded = transportPrice - budget
          const moneyNeeded = NormalTicket - budgetNeeded
          console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`)
      }
 
    } else if(typeOfTiket==="VIP"){ 
        totalPrice = countOfPeople * VIPTicket;
        budgetLeft = budget - transportPrice;
        if(totalPrice<=budgetLeft){
        const moneyLeft = budgetLeft - totalPrice;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
        } else {
            const moneyNeeded = totalPrice - budgetLeft;
            console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`)
        }
        
    }

 } else if(countOfPeople>=25&&countOfPeople<=49){
    transportPrice = budget*0.40;
    if(typeOfTiket==="Normal"){ 
      totalPrice = countOfPeople * NormalTicket;
      budgetLeft = budget - transportPrice
      if(totalPrice<=budgetLeft){
      const moneyLeft = budgetLeft - NormalTicket;
      console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
      } else {
          const budgetNeeded = transportPrice - budget
          const moneyNeeded = NormalTicket - budgetNeeded
          console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`)
      }
 
    } else if(typeOfTiket==="VIP"){ 
        totalPrice = countOfPeople * VIPTicket;
        budgetLeft = budget - transportPrice;
        if(totalPrice<=budgetLeft){
        const moneyLeft = budgetLeft - totalPrice;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
        } else {
            const moneyNeeded = totalPrice - budgetLeft;
            console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`)
        }
        
    }

 } else if(countOfPeople>=50){
    transportPrice = budget*0.25;
    if(typeOfTiket==="Normal"){ 
      totalPrice = countOfPeople * NormalTicket;
      budgetLeft = budget - transportPrice;
      if(totalPrice<=budgetLeft){
      const moneyLeft = budgetLeft - NormalTicket;
      console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
      } else {
          const budgetNeeded = transportPrice - budget
          const moneyNeeded = NormalTicket - budgetNeeded
          console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`)
      }
 
    } else if(typeOfTiket==="VIP"){ 
        totalPrice = countOfPeople * VIPTicket;
        budgetLeft = budget - transportPrice;
        if(totalPrice<=budgetLeft){
        const moneyLeft = budgetLeft - totalPrice;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
        } else {
            const moneyNeeded = totalPrice - budgetLeft;
            console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`)
        }
        
    }

 } 
}
matchTickets(["50000","Normal","200"])