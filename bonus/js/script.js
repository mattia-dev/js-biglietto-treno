var tripDistance = prompt('Quanti km vuoi percorrere?')
var userBirthYear = prompt('In che anno sei nato?');
var studentStatus = prompt('Sei uno studente universitario? Rispondi SI o NO');

var tripBasicFare = parseInt(tripDistance) * 0.21;

var userAge = 2021 - parseInt(userBirthYear);

var under18Discount = (tripBasicFare / 100) * 20;
var over65Discount = (tripBasicFare / 100) * 40;
var studentDiscount = (tripBasicFare / 100) *30;

if (studentStatus.includes('SI')) {
    output.innerHTML += "<br/>Il costo totale del viaggio è di " + (tripBasicFare - studentDiscount).toFixed(2) + " euro.";
} else {
    if (userAge < 18) {
        output.innerHTML += "<br/>Il costo totale del viaggio è di " + (tripBasicFare - under18Discount).toFixed(2) + " euro.";
    } else {
        if (userAge > 65) {
            output.innerHTML += "<br/>Il costo totale del viaggio è di " + (tripBasicFare - over65Discount).toFixed(2) + " euro.";
        }

        else {
            output.innerHTML += "<br/>Il costo totale del viaggio è di " + tripBasicFare.toFixed(2) + " euro.";
        }
    }
}
