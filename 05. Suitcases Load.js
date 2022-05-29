function  suitcasesLoad(input) {
    let index = 0;
    let cappacity = Number(input[index]);
    index++;
    let suitcase = (input[index]);
    let counter = 0;
    let newCappacity = 0;
    while (suitcase !== "End") {
        
        suitcase = Number(input[index]);
        counter++;
        if (counter % 3 === 0) {
            suitcase += suitcase * 0.1;
        }
        cappacity -= suitcase;
        if (cappacity <= 0) {
            break;
        }
        newCappacity++;
        
        index++;
        suitcase = (input[index]);
    }
    if (cappacity <= 0) {
        console.log(`No more space!`);
    } else {
        console.log(`Congratulations! All suitcases are loaded!`);
    }
    console.log(`Statistic: ${newCappacity} suitcases loaded.`);
}
suitcasesLoad(["1200.2",
"260",
"380.5",
"125.6",
"305",
"End"])