function streamOfLetters(input) {
    let index = 0;
    let letters = input[index];
    let result = 0;
    let counter = 0;
    let resultCON = 0;
    let counterCON = 0;
    while (letters !== "End"){
    letters = input[index];
    index++;
    result += letters;
    if (letters === "c"){
        if (counter % 2 !== 1){
           resultCON += letters;
           counterCON++;
        } else if ( letters === "o"){
            if (counter % 2 !== 1){
                resultCON += letters;
                counterCON++;
             }
        } else if (counter === "n"){
            if (counter % 2 !== 1){
                resultCON += letters;
                counterCON++;
             }
        }
    } if (counterCON === 3){
        console.log(result + " ");
    }
    }
}
streamOfLetters(["H",
    "n",
    "e",
    "l",
    "l",
    "o",
    "o",
    "c",
    "t",
    "c",
    "h",
    "o",
    "e",
    "r",
    "e",
    "n",
    "e",
    "End"])