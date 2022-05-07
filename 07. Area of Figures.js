function AreaofFigures(input) {
  let figure = input[0];
  let result = "";
  let a = Number(input[1]);
  

  if (figure === "square") {
    result = a * a;
  } else if ((figure === "rectangle")) {
    let b = Number(input[2]);
    result = a * b;
  } else if (figure === "circle") {
    result = Math.PI * a * a;
  } else {
    let h = Number(input[2]);
    result = (a * h) / 2;
  }
  console.log(result.toFixed(3));
}
AreaofFigures(["circle", "6"]);
// ⦁	Ако фигурата е квадрат (square): на следващия ред се чете едно дробно число - дължина на страната му
// ⦁	Ако фигурата е правоъгълник (rectangle):
//  на следващите два реда четат две дробни числа - дължините на страните му
// ⦁	Ако фигурата е кръг (circle): на следващия ред чете едно дробно число - радиусът на кръга
// ⦁	Ако фигурата е триъгълник (triangle):
// на следващите два реда четат две дробни числа - дължината на страната му и дължината на височината към нея
// Резултатът да се закръгли до 3 цифри след десетичната запетая.
