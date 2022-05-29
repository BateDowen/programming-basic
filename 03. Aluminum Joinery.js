function  aluminumJoinery(input) {
    let dogramaCount = Number(input[0]);
    let size = input[1];
    let delivery = input[2];
    let priceForOne = 0;
    let discount = 0;
    if (dogramaCount < 10) {
        console.log(`Invalid order`);
        return;
    }
    if(size === "90X130"){
         priceForOne = 110;
         if (dogramaCount >=30 && dogramaCount <= 60) {
             discount = 0.05;
         } else if (dogramaCount > 60){
             discount = 0.08;
         }
    } else if (size === "100X150"){
        priceForOne = 140;
        if (dogramaCount >=40 && dogramaCount <= 80) {
            discount = 0.06;
        } else if (dogramaCount > 80){
            discount = 0.1;
        }
    } else if (size === "130X180"){
        priceForOne = 190;
        if (dogramaCount >=20 && dogramaCount <= 50) {
            discount = 0.07;
        } else if (dogramaCount > 50){
            discount = 0.12;
        }
    } else if (size === "200X300"){
        priceForOne = 250;
        if (dogramaCount >=25 && dogramaCount <= 50) {
            discount = 0.09;
        } else if (dogramaCount > 50){
            discount = 0.14;
        }
    }
    let total = 0;
     total = (dogramaCount * priceForOne);
     total -= total * discount;
     if (delivery === "With delivery") {
         total += 60;
     }
     if (dogramaCount > 99) {
         total -= total * 0.04;
     }
     console.log(`${total.toFixed(2)} BGN`);

            
    }
aluminumJoinery(["2",
"130X180",
"With delivery"])