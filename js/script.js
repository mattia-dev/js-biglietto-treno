var tripDistance = prompt('Quanti km vuoi percorrere?')
var userAge = prompt('Quanti anni hai?');

var tripBasicFare = parseInt(tripDistance) * 0.21;

var under18Discount = (tripBasicFare / 100) * 20;
var over65Discount = (tripBasicFare / 100)  * 40;

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