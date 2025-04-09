document.getElementsByClassName("Reservation_form")[0].addEventListener("submit", function () {

    var Name = document.getElementsByClassName("Reservation_Name")[0].value;
    var Person = document.getElementsByClassName("Reservation_Person")[0].value;
    var Timing = document.getElementsByClassName("Reservation_Timing")[0].value;
    var Date = document.getElementsByClassName("Reservation_Date")[0].value;

    let reservationData = localStorage.getItem("reservationData");

    if (reservationData) {
        reservationData = JSON.parse(reservationData);
    } else {
        reservationData = [];
    }

    reservationData.push({ Name, Person, Timing, Date });
    localStorage.setItem("reservationData", JSON.stringify(reservationData));
    
});
