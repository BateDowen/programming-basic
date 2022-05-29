function PipesInPool(input){
const Vpool = Number(input[0]);
const P1pipefor1hour = Number(input[1]);
const P2pipefor1hour = Number(input[2]);
const NworkerMIssing = Number(input[3]);

const P1Total = P1pipefor1hour*NworkerMIssing;
const P2Total= P2pipefor1hour *NworkerMIssing;
let P1plusP2= P1Total+P2Total;

if (Vpool>=P1plusP2){
    let waterInpool = P1plusP2/Vpool*100;
    let P1 = P1Total/P1plusP2*100;
    let P2 = P2Total/P1plusP2*100;
    console.log(`The pool is ${waterInpool}% full. Pipe 1: ${P1.toFixed(2)}%. Pipe 2: ${P2.toFixed(2)}%.`)
} else{
    console.log(`For ${NworkerMIssing} hours the pool overflows with ${P1plusP2-Vpool} liters.`)
}

}
PipesInPool([1000,100,120,3])
PipesInPool([100, 100, 100, 2.5])