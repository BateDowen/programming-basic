function workingHours(input){
const hour = Number(input[0]);
const day = input[1];

if (hour>=10 || hour<=18) {
    if(day==="Monday" || day === "Tuesday" || day==="Wednesday" ||
day==="Thursday" || day==="Friday" || day==="Saturday" ){
    console.log("open")
}
} else {
    console.log("closed")
}

}

workingHours(["1","Sunday"])