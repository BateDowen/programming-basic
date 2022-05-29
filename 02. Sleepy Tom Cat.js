function SleepyTomCat(input){
const Holydays = Number(input[0]);
const TomplayYear = 30000;
const workinDayPlay = 63;
const HolydayPlay = 127;
const OneYear = 365;
const workingDays = OneYear-Holydays;
const totalTimeforPlay = (workingDays*workinDayPlay)+(Holydays*HolydayPlay);
let Tomsleep = Math.abs(TomplayYear-totalTimeforPlay);
let hours = Math.floor(Tomsleep/60);
let minutes = Tomsleep%60;
if (minutes>=60){
    hours += 1;
    minutes -= 60;
}

if (minutes<10){
    console.log(`${hours}:0${minutes}`);
}


if (totalTimeforPlay>=TomplayYear){
    console.log(`Tom will run away`);
    console.log (`${hours.toFixed(0)} hours and ${minutes.toFixed(0)} minutes more for play`);
} else{
    console.log(`Tom sleeps well`);
    console.log(`${hours.toFixed(0)} hours and ${minutes.toFixed(0)} minutes less for play`);
}
}
SleepyTomCat([75])