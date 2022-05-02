function FoodDelivery(input){
const chikenMenus = Number(input[0])*10.35;
const fishMenus = Number(input[1])*12.4;
const veggieMenus = Number(input[2])*8.15;
const allMenusPrice = (chikenMenus + fishMenus + veggieMenus);
const dessertPrice = allMenusPrice*0.2;
const delivery = 2.5;
const orderPrice = (allMenusPrice + dessertPrice + delivery);
console.log(orderPrice)
}
FoodDelivery(["2 ","4 ","3 "])
FoodDelivery(["9 ","2 ","6 "])
// Цена за пилешките менюта: 2 броя * 10.35  = 20.70
// Цена за менютата с риба: 4 броя * 12.40 = 49.60
// Цена за вегетарианските менюта: 3 броя * 8.15 = 24.45
// Обща цена на менютата: 20.70 + 49.60 + 24.45 = 94.75
// Цена на десерта: 20% от 94.75 = 18.95
// Цена на доставка: 2.50 (по условие)
// Обща цена на поръчката: 94.75 + 18.95 + 2.50 = 116.20