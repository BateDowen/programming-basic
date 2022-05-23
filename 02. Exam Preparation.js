function examPreparation(input) {
    const badScooreCount = Number(input[0]);
    let index = 1;
    let nameOfTask = input[index];
    let numberOfProblems = 0;
    let sumGrades = 0;
    let currNumOFBadGrades = 0;
    while(nameOfTask !== "Enough"){
        numberOfProblems++;
        index++;
        let currentGrade = Number(input[index]);
        sumGrades += currentGrade;
        if(currentGrade <= 4){
            currNumOFBadGrades++;
         } 
        if(currNumOFBadGrades === badScooreCount){
            console.log(`"You need a break, ${currNumOFBadGrades} poor grades.`)
            break;
        }
         index++;
         nameOfTask = input[index];
    } if(nameOfTask === "Enough"){
        let avg = (sumGrades / numberOfProblems).toFixed(2);
        console.log(`"Average score: ${avg}`)
        console.log(`Number of problems: ${numberOfProblems}`)
        index -= 2
        nameOfTask = input[index];
        console.log(`Last problem: ${nameOfTask}`)
    }
} 
examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])