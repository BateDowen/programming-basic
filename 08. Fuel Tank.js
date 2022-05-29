function FuelTank (input){
const fuel = input[0].toLowerCase()
const liters = Number(input[1]);
switch(fuel){
    case "diesel":
        if (liters>=25){
            console.log(`You have enough ${fuel}.`)
        }else {
            console.log(`Fill your tank with ${fuel}!`)
        } break
    case "gasoline":
        if (liters>=25){
            console.log(`You have enough ${fuel}.`)
        }else {
            console.log(`Fill your tank with ${fuel}!`)
        } break
    case "gas":
        if (liters>=25){
            console.log(`You have enough ${fuel}.`)
        }else {
            console.log(`Fill your tank with ${fuel}!`)
        } break
    default: console.log(`Invalid fuel!`)
}
}
FuelTank(["Disel","30"])