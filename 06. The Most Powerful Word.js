function  theMostPowerfulWord(input) {
    let index = 0;
    let word = input[index];
    index++;
    let simbol = "";
    let numberS = 0;
    let newWordNum = 0;
    let powerful = 0;
    let newWord = "";
    while(word !== "End of words"){
        let total = 0;
        let firstLetter = 0;
        for(let i = 0; i < word.length; i++){
            simbol = word.charAt(i);
            numberS = simbol.charCodeAt(0);
            if (i === 0){
                if(numberS == 65 || numberS == 69 || numberS == 73 || numberS == 79 || numberS == 85 || numberS == 89 
                && numberS == 97 || numberS == 101 || numberS == 105 || numberS == 111 || numberS == 117 || numberS == 121) {
                firstLetter = numberS;
                }
            }
            total += numberS;
            
        } 
        if (firstLetter == 65 || firstLetter == 69 || firstLetter == 73 || firstLetter == 79 || firstLetter == 85 || firstLetter == 89 
            && firstLetter == 97 || firstLetter == 101 || firstLetter == 105 || firstLetter == 111 || firstLetter == 117 || firstLetter == 121) {
            total *= word.length;
        } else {
           total = Math.floor(total / word.length); 
        }
        newWordNum = total;
        if (powerful < total){
            powerful = newWordNum;
            newWord = word;
        }
        index++;
        word = input[index];
    }   
    console.log(`The most powerful word is ${newWord} - ${powerful}`);
}
theMostPowerfulWord(["Experience",
    "The",
"Most",
"Powerful",
"Word",
"Is",
"Experience",
"End of words"])