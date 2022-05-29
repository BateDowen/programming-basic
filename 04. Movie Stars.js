function  movieStars(input) {
    let index = 0;
    let budget = Number(input[index]);
    index++;
    let name = input[index];
    index++;
    let salary = 0;
    while (name !== "ACTION") {
        let nameLength = name.length
        
        if (nameLength > 15) {
            salary = budget * 0.2;
        } else {
            salary = Number(input[index]);
            index++;
        }
        budget -= salary;
        if (budget <= 0) {
            console.log(`We need ${Math.abs(budget).toFixed(2)} leva for our actors.`);
            return;
        }
        
        name = input[index];
        index++;
    }
    console.log(`We are left with ${budget.toFixed(2)} leva.`);
} 
movieStars(["170000",
"Ben Affleck",
"40000.50",
"Zahari Baharov",
"80000",
"Tom Hanks",
"2000.99",
"ACTION"])