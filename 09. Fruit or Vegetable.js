function FruitorVegetable(input){
const name = input[0];
switch(name){
    case "banana":
    case "apple" :
    case "kiwi" :
    case "cherry":
    case "lemon" :
    case "grapes" :
        console.log("fruit");break
    case "tomato" :
    case "cucumber" :
    case "carrot" :
    case "pepper" :
        console.log("vegetable");break
    default : 
    console.log("unknown"); break
}
}
FruitorVegetable(["banana"])