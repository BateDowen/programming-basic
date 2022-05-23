function dishwasher(input) {
    let detergentQuantity =  750;
    let index = 0;
    let detergentCount = Number(input[index]);
    index++;
    let dishes = input[index];
    let pots = 0;
    let counter = 0;
    detergentQuantity *= detergentCount;
    let usedDetergent = 0;
    let dishesQuantity = 0;
    let potsQuantuty = 0;
    while (dishes !== "End"){
        pots = Number(input[index]);
        counter++;
        if(counter % 3 !== 0){
            if (detergentQuantity <= usedDetergent){
                console.log(`Not enough detergent, ${Math.abs(detergentQuantity)} ml. more necessary!`);
                return;
                }
            usedDetergent = pots * 5;
            detergentQuantity -= usedDetergent;
            dishesQuantity += pots
            
        }
        
        if (counter % 3 === 0){
            if (detergentQuantity <= usedDetergent){
            
                console.log(`Not enough detergent, ${Math.abs(detergentQuantity)} ml. more necessary!`);
                return;
                }
          usedDetergent = pots * 15;
          detergentQuantity -=usedDetergent;
          potsQuantuty += pots
          
        }
        index++;
        dishes = input[index];
        
        
        } 
     
    
        console.log(`Detergent was enough!`);
        console.log(`${dishesQuantity} dishes and ${potsQuantuty} pots were washed.`);
        console.log(`Leftover detergent ${detergentQuantity} ml.`);
    
    
}
dishwasher([2,
    53,
    65,
    55,
    "End"])