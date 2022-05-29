function  carNumber(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let first = 0;
    let second = 0;
    let third = 0;
    let forth = 0;
    let sum = 0
    let sum2 = 0;
    let number = "";
    let number2 = "";
    for(let i = start; i<= end; i++){
        for(let j = start; j <= end; j++){
            for(let k = start; k <= end; k++){
                for(let g = start; g <= end; g++){
                    first = i;
                    second = j;
                    third = k;
                    forth = g;
                    sum = second + third;
                    number += `${first}${second}${third}${forth} `
                    if (first % 2 === 0 && forth % 2 !== 0 || first % 2 !== 0 && forth % 2 === 0) {
                        
                        if (first > forth && sum % 2 === 0) {
                            number2 += `${first}${second}${third}${forth} `
                        }
                    }
                }
            }
        }
    } console.log(number2);
}
carNumber([3,5])