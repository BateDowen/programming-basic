function evenPowersof2(input){
const num = Number(input[0]);
for (let index = 0; index <= num; index+=2) {
    console.log(Math.pow(2,index))
    
}
}
evenPowersof2([6])