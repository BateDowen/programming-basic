function depositcalculator(input){
    const deposit = Number(input[0]);
    const period = Number(input[1]);
    const percent = Number(input[2]);
    const interest = (deposit * percent) / 100;
    const interestPermonth = interest / 12;
    const sum = deposit + period * interestPermonth;
    console.log(sum)
}
depositcalculator(["200", "3", "5.7"]);