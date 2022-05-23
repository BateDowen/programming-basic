function oldBooks(input) {
    
    let theBook = input[0];
    let index = 1;
    let bookIsFound = false;
    let nextBooks = input[index];

    while(nextBooks !== "No More Books"){
     if (nextBooks === theBook){
         bookIsFound = true;
         break;
     } index++;
     nextBooks = input[index];
    }
     
     if(bookIsFound === false){
         console.log("The book you search is not here!");
         console.log(`You checked ${index - 1} books.`)
     } else {
         console.log(`You checked ${index - 1} books and found it.`)
     }

    
}   
oldBooks(["Troy",
"Stronger",
"Life Style",
"Troy"])