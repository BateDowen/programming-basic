function  coins(input) {
    let change = input[0];
    let convertChange = parseInt(change*100);
    let coins = 0;
    while(convertChange > 0){
        if(convertChange - 200 >= 0){
            coins++;
            convertChange -= 200;
        } else if(convertChange -100 >= 0){
            coins++;
            convertChange -= 100;
        } else if(convertChange - 50 >=0){
            coins++;
            convertChange -= 50;
        } else if(convertChange - 20 >= 0){
            coins++;
            convertChange -= 20;
        } else if(convertChange - 10 >= 0){
            coins++;
            convertChange -= 10;
        } else if(convertChange - 5 >= 0){
            coins++;
            convertChange -= 5;
        } else if(convertChange - 2 >= 0){
            coins++;
            convertChange -= 2;
        } else if (convertChange - 1 >= 0){
            coins++;
            convertChange -= 1;
        }
    } console.log(coins)
}
coins ([1.23])