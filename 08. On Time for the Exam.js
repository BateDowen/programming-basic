function onTimefortheExam (input){
const examHour = Number(input[0]);
const examMinute = Number(input[1]);
const arrivingHour = Number(input[2]);
const arrivingMinute = Number(input[3]);

const totalExamMnutes = examHour * 60 + examMinute;
const totalArriingTime = arrivingHour * 60 + arrivingMinute;
const differenceInTime = Math.abs(totalExamMnutes-totalArriingTime)
const hourDiff = Math.floor(differenceInTime / 60);
let minutesDiff = differenceInTime % 60;
if (minutesDiff === 0 || (minutesDiff<10 && hourDiff>0)) {
    minutesDiff = `0${minutesDiff}`
}
if (totalExamMnutes === totalArriingTime) {
    console.log("On time")
} else if (totalArriingTime > totalExamMnutes && differenceInTime < 60){
console.log("Late");
console.log(`${minutesDiff} minutes after the start`);
} else if (totalArriingTime > totalExamMnutes && differenceInTime >=60) {
    console.log("Late");
    console.log (`${hourDiff}:${minutesDiff} hours after the start`);
} else if (differenceInTime <=30){
    console.log("On time");
    console.log (`${minutesDiff} minutes before the start`)
} else if (differenceInTime>30 && differenceInTime<60) {
    console.log("Early");
    console.log(`${minutesDiff} minutes before the start`);
} else {
    console.log("Early");
    console.log(`${hourDiff}:${minutesDiff} hours before the start`);
}


}
onTimefortheExam(["9",
"00",
"8",
"30"])