function uniquePINCodes(input) {
    let firstMax = Number(input[0]);
    let secondMax = Number(input[1]);
    let thirdMax = Number(input[2]);
    let h = "";
    for(let i = 1; i <= firstMax; i++){
        for(let j = 0; j <= secondMax; j++){
            for(let k = 1; k <= thirdMax; k++){
                if (i % 2 === 0 && j>=2 && j<=7 && j != 4 && j!== 6 && k%2 === 0) {
                    h += `${i}${j}${k} \n`; 
                    
                }
            } 
        } 
    } console.log(h);
}
uniquePINCodes([3,5,5])