function  easterLunch(input) {
    let kozunakPrice = 3.2;
    let twelveEggs = 4.35;
    let cockiesPerKg = 5.4;
    let eggsPaintForOne = 0.15;
    let kozunakCount = Number(input[0]);
    let eggsCount = Number(input[1]);
    let cockiesKg = Number(input[2]);
    let totalKozunak = kozunakPrice * kozunakCount;
    let totalTwelveEggs = twelveEggs * eggsCount;
    let totatCockies = cockiesKg * cockiesPerKg;
    let totaleggsPaintForOne = 12 * eggsCount * eggsPaintForOne;
    let all = totalKozunak + totalTwelveEggs + totatCockies + totaleggsPaintForOne;
    console.log(all.toFixed(2));
}
easterLunch(["3",
"2",
"3"])