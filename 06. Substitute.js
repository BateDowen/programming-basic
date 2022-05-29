function  substitute(input) {
    let k = Number(input[0]);
    let l = Number(input[1]);
    let m = Number(input[2]);
    let n = Number(input[3]);
    let firstNum = "";
    let secondNum =0;
    let counter = 0;
    for(let i = k; i<=8; i++){
        for(let j = 9; j >= l; j--){
            for(let z = m; z <= 8; z++){
                for(let y = 9; y >= n; y--){
                    firstNum = `${i}${j}`
                    secondNum = `${z}${y}`
                     if (i % 2 === 0 && j % 2 !== 0 && z % 2 === 0 && y % 2 !== 0) {
                        if (firstNum === secondNum) {
                         console.log(`Cannot change the same player.`);
                        } else {
                        console.log(`${firstNum} - ${secondNum}`);
                        counter++;
                    } 
                    } 
                    if (counter === 6) {
                        return;
                    }
                }
            } 
        }  
    } 
}
substitute(["7",
"6",
"8",
"5"])