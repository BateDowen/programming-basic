function usdtobgn(input){
    const fixedvalue = 1.79549
    let usd = Number(input[0]);
    let bgn = usd*fixedvalue;
    console.log(bgn)
}
usdtobgn(["22"])