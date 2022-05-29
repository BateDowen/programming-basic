function equalPairs(input) {
    let n = Number(input[0]);
    let index = 1;
    let sum = 0
    for (let i = 1; i <= n; i++){
        let num1 = Number(input[index]);
        index++;
        let num2 = Number(input[index]);
        index++;
        sum = num1 + num2
        console.log(sum);
    }
}

equalPairs([3,
    1,
    2,
    0,
    3,
    4,
    -1])