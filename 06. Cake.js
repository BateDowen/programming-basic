function cake(input) {
    let lenghtCake = Number(input[0]);
    let widthCake = Number(input[1]);
    let countSlices = lenghtCake * widthCake;
    let index = 2;
    let slices = input[index];
    index++;
    while(slices !== "STOP"){
        let leftSlices = Number(slices);
         countSlices -= leftSlices;
         slices = input[index];
         index++;
         if (countSlices < 0){
             console.log(`No more cake left! You need ${Math.abs(countSlices)} pieces more.`);
             break;
         }
         
    }
    if (slices === "STOP"){

        if(countSlices >= 0){
            console.log(`${countSlices} pieces are left.`)
        } else{
            console.log(`No more cake left! You need ${Math.abs(countSlices)} pieces more.`)
        }
    }
}
cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"]);
