function easterShop(input) {
    let index = 0;
    let eggsInStore = Number(input[index]);
    index++;
    let comand = input[index];
    let totalSoldEgs = 0;
    while (comand !== "Close"){
        index++;
        let egs = Number(input[index]);
       
        if (comand === "Buy"){
            if(egs > eggsInStore){
                console.log(`Not enough eggs in store!`);
                console.log(`You can buy only ${eggsInStore}.`);
                return;
            }
            eggsInStore -= egs;
            totalSoldEgs += egs
         }else if(comand === "Fill"){
             eggsInStore += egs;
             
        }
        index++;
        comand = input[index];
    } 
    console.log(`Store is closed!`);
    console.log(`${totalSoldEgs} eggs sold`);
}
easterShop(["20",
"Fill",
"30",
"Buy",
"15",
"Buy",
"20",
"Close"])