function skiTrip(input) {
    const onePersonRoomNight = 18;
    const apartmentNight = 25;
    const presidentApartmentNigt = 35;

    const vacationDays = Number(input[0]);
    const roomType = input[1];
    const rating = input[2];
    const vacationNights = vacationDays - 1;
    let price = 0;
    if (roomType === "room for one person"){
        price = vacationNights*onePersonRoomNight;
    } else if (roomType=== "apartment"){
        price  = vacationNights*apartmentNight
        if(vacationDays<=10){
            price -= price*0.3;
        } else if( vacationDays>10 && vacationDays<15){
            price -= price*0.35;
        } else {
            price -= price*0.5;
        }
    } else if (roomType === "president apartment"){
        price = vacationNights*presidentApartmentNigt
        if (vacationDays<=10){
            price -= price*0.1;
        } else if (vacationDays>10 && vacationDays<15){
            price -= price*0.15;
        } else {
            price -= price*0.2;
        }
    }
if (rating === "positive"){
    price += price*0.25;
} else {
    price -= price*0.1
} console.log(price.toFixed(2))
}
skiTrip (["14",
"apartment",
"positive"])