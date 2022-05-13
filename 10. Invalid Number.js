function invalidNumber(input){
let number = Number(input[0]);
let num = (number>=100 && number<=200 || number==0)
if (!num){
    console.log("invalid")
}

}
invalidNumber(["75"])