function    energyBooster(input) {
let fruit = input[0];
let size = input[1];
let countSets = Number(input[2]);
let price = 0;
switch (fruit) {
    case "Watermelon":
        if (size === "small") {
            price = 56 * 2;
        } else {
            price = 28.70 * 5;
        }
        break;
    case "Mango":
        if (size === "small") {
            price = 36.66 * 2;
        } else {
            price = 19.60 * 5;
        }
        break;
    case "Pineapple":
        if (size === "small") {
            price = 42.10 * 2;
        } else {
            price = 24.80 * 5;
        }
        break;
    case "Raspberry":
        if (size === "small") {
            price = 20 * 2;
        } else {
            price = 15.20 * 5;
        }
        break;
}   let total = 0 
    total = price * countSets;
    if (total >= 400 && total <= 1000) {
        total -= total * 0.15;
    } else if (total > 1000) {
        total -= total * 0.5;
    }
    console.log(total.toFixed(2));

}
energyBooster(["Watermelon",
"big",
"4"])