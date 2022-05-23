function moving(input) {
  let width = Number(input[0]);
  let lenght = Number(input[1]);
  let height = Number(input[2]);
  let totalEmptySpace = width * lenght * height;
  let index = 3;
  let boxes = input[index];
  let totalBoxes = 0;
  let emptySpaceLeft = 0;
  while (boxes !== "Done") {
    let boxesAsNumber = Number(boxes);
    index++;
    totalBoxes += boxesAsNumber;
    
    if(totalBoxes > totalEmptySpace){
        emptySpaceLeft = Math.abs(totalEmptySpace - totalBoxes);
        console.log(`No more free space! You need ${emptySpaceLeft} Cubic meters more.`);
        return;
    } 
    
    boxes = input[index];
  }

  emptySpaceLeft = Math.abs(totalEmptySpace - totalBoxes);

  console.log(`${emptySpaceLeft} Cubic meters left.`);
  
   
}
moving(["10", 
"1",
"2",
"4", 
"6",
"Done"]);
