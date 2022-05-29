function  excursion(input) {
    let peopleCount = Number(input[0]);
    let nightsCount = Number(input[1]);
    let transportCardsCount = Number(input[2]);
    let ticketsCount = Number(input[3]);
    let oneNight = 20;
    let oneCard = 1.6;
    let oneTicked = 6;
    let onePersonNight = nightsCount*oneNight;
    let allPersonCard = transportCardsCount * oneCard;
    let allTickets = ticketsCount * oneTicked;
    let total = onePersonNight + allPersonCard + allTickets;
    let allTotal = 0
    allTotal = total * peopleCount;
    allTotal += allTotal * 0.25;
    console.log(allTotal.toFixed(2));
}
excursion(["20",
"14",
"30",
"6"])