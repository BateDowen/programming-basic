function  movieDay(input) {
    let shootTime = Number(input[0]);
    let sceenCount = Number(input[1]);
    let sceenTime = Number(input[2]);
    let preparation = shootTime * 0.15;
    let toatal = sceenCount * sceenTime + preparation;
    if (shootTime >= toatal) {
        console.log(`You managed to finish the movie on time! You have ${Math.round(shootTime - toatal)} minutes left!`);
    } else {
        console.log(`Time is up! To complete the movie you need ${Math.round(toatal - shootTime)} minutes.`);
    }
}
movieDay(["120",
"10",
"11"])