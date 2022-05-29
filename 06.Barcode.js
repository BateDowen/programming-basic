function barcode(input) {
    let startNum ="" + input[0];
    let endNum ="" + input[1];

    let startA = startNum[0];
    let startB = startNum[1];
    let startC = startNum[2];
    let startD = startNum[3];
    let endA = endNum[0];
    let endB = endNum[1];
    let endC = endNum[2];
    let endD = endNum[3];
    let k = "";
    for(let a = startA; a <= endA; a++){
       
            for(let b = startB; b <= endB; b++){
                for(let c = startC; c <= endC; c++){
                    for(let d = startD; d<=endD; d++){
                        if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0 && d % 2 !== 0){
                         k += `${a}${b}${c}${d} `;
                         
                        }
                                    
                }
        }
        
        } 
    } console.log(k);
}
barcode(["2345",
"6789"])