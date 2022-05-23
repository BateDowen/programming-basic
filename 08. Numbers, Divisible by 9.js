function numbersDivisibleby9(input) {
    const startNumber = Number(input[0]);
    const endNumber = Number(input[1]);
    let sum = 0;

    for (let i= startNumber; i <= endNumber; i++) {
        if (i % 9 === 0) {
            sum += i;
        }
        
    } console.log("The sum " + sum)

    for (let i= startNumber; i < endNumber; i++) {
        if(i % 9 === 0) {
        console.log(i)
        }
        
    }
}
numbersDivisibleby9(["100","200"])