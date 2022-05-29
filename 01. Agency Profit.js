function  agencyProfit(input) {
    let company = input[0];
    let adultTickets = Number(input[1]);
    let childrenTickets = Number(input[2]);
    let adultPrice = Number(input[3]);
    let servicePrice = Number(input[4]);
    let childrenPrice = adultPrice * 0.3;
    let adultPlusService = adultPrice + servicePrice;
    let childrenPlusService = childrenPrice + servicePrice;
    let total = (childrenTickets*childrenPlusService) + (adultTickets*adultPlusService);
    let profit = total * 0.2;
    console.log(`The profit of your agency from ${company} tickets is ${profit} lv.`);
}
agencyProfit(["WizzAir",
"15",
"5",
"120",
"40"])