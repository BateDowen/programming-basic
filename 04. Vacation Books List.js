function VacationBooksList (input){
const pages = Number(input[0]);
const pagesperhour = Number(input[1]);
const days = Number(input[2]);
let readtime = pages / pagesperhour;
let hourperday = readtime / days;
console.log(hourperday); 
}

 VacationBooksList(["212 ","20 ","2 "])