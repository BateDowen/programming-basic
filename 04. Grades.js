function grades(input) {
  let countOFStudents = Number(input[0]);
  let topStudents = 0;
  let between400and499 = 0;
  let between300and399 = 0;
  let fail = 0;
  let allGrades = 0;
  for (let i = 1; i <= countOFStudents; i++){
      let grades = Number(input[i]);
      if (grades >= 5){
          topStudents++;
      } else if (grades >= 4.00 && grades <= 4.99){
          between400and499++;
      } else if (grades >= 3.00 && grades <= 3.99){
          between300and399++;
      } else if (grades <= 2.99){
          fail++;
      }
      allGrades += grades;
  } 
  
  let topStudentsProcent = (topStudents / countOFStudents) * 100;
  let between400and499Procent = (between400and499 / countOFStudents) * 100;
  let between300and399Procent = (between300and399 / countOFStudents) * 100;
  let failProcent = (fail / countOFStudents) * 100;
  let avarage = (allGrades / countOFStudents);

  console.log(`Top students: ${topStudentsProcent.toFixed(2)}%`);
  console.log(`Between 4.00 and 4.99: ${between400and499Procent.toFixed(2)}%`);
  console.log(`Between 3.00 and 3.99: ${between300and399Procent.toFixed(2)}%`);
  console.log(`Fail: ${failProcent.toFixed(2)}%`);
  console.log(`Average: ${avarage.toFixed(2)}`);

}
grades([10, 3.0, 2.99, 5.68, 3.01, 4, 4, 6.0, 4.5, 2.44, 5]);
