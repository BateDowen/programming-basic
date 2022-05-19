function salary(input) {
  let index = 0;
  let openTabs = Number(input[index]);
  index++;
  let workerSalary = Number(input[index]);
  index++;
  let isHaveSalary = true;
  
  for( let i = 0; i < openTabs; i++){
      let currenTab = input[index];
      index++;

      if (currenTab === "Facebook"){
          workerSalary-=150;
      } else if(currenTab === "Instagram"){
          workerSalary -= 100;
      } else if(currenTab === "Reddit"){
          workerSalary -= 50;
      }
    if(workerSalary <= 0){
        console.log(`You have lost your salary.`);
        isHaveSalary = false
        break;
    }
  }
    if(isHaveSalary){
    console.log(workerSalary);
    }
  
}
salary([
  "10",
  "750",
  "Facebook",
  "Dev.bg",
  "Instagram",
  "Facebook",
  "Reddit",
  "Facebook",
  "Facebook",
]);
