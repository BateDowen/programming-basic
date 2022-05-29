function seriesCalculator(input) {
    let name = input[0];
    let seasons = Number(input[1]);
    let episodes = Number(input[2]);
    let minutesEp = Number(input[3]);
    let reklami = minutesEp * 0.2;
    let totalEp = minutesEp + reklami;
    let special = seasons * 10;
    let total = totalEp * episodes * seasons + special;
    console.log(`"Total time needed to watch the ${name} series is ${total.toFixed(2)} minutes."`);
}
seriesCalculator(["Lucifer",
"3",
"18",
"55"])