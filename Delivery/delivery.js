document.getElementsByClassName("Reservation_form")[0].addEventListener("submit", function () {

    var Name = document.getElementsByClassName("Reservation_Name")[0].value;
    var Person = document.getElementsByClassName("Reservation_Person")[0].value;
    var Timing = document.getElementsByClassName("Reservation_Timing")[0].value;
    var Comming = document.getElementsByClassName("Reservation_Options")[0].value;
    var Date = document.getElementsByClassName("Reservation_Date")[0].value;

    let reservationData = localStorage.getItem("reservationData");

    if (reservationData) {
        reservationData = JSON.parse(reservationData);
    } else {
        reservationData = [];
    }

    // reservationData.push({ Name, Person, Timing, Comming,Date });
    // localStorage.setItem("reservationData", JSON.stringify(reservationData));

    // var successMessage = document.getElementById('hidden_text');
    // successMessage.style.display = 'block'; 
    // setTimeout(function() {
    //     successMessage.style.display = 'none'; 
    // }, 3000);
    
});
