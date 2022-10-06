// PSUEDO CODE
/*
km      user   
price € 0.21/km
age     user    
discount: <18:20%  >65:40%

Ask the user for the amount of km necessary for the trip
Ask the user about their age

The km input from the user has to be multiplied for the price.
IF the age is less than 18, Then a -20% discount has to be applied. final price =  kmprice - kmprice * 0.2
If the age is more than 65, Then a -40% discount has to be applied. final price = kmprice - kmprice * 0.4

Calc amount of money required taking into account the distance, age and eventually 
apply the discount fee

Round the total amount with only 2 decimal numbers

Show the final rounded amount to the user 

*/

// DATA
const priceForKm = 0.21;
let userDistance = parseFloat(prompt("How many kilometers (km) is the trip?"));
console.log(userDistance);
let userAge = parseInt(prompt("How old are you?"));
console.log(userAge);
const ticketFee = Math.round(userDistance * priceForKm * 100) / 100;
console.log(ticketFee);
let finalTicketFee;

// ELABORATION
if (userAge < 18) {
  finalTicketFee = Math.round((ticketFee - ticketFee * 0.2) * 100) / 100;
  console.log(finalTicketFee, "under18 price");
} else if (userAge > 65) {
  finalTicketFee = Math.round((ticketFee - ticketFee * 0.4) * 100) / 100;
  console.log(finalTicketFee, "over65 price");
} else {
  finalTicketFee = ticketFee;
  console.log(finalTicketFee, "non-discounted price");
}

//OUTPUT
document.getElementById("userAge").innerHTML = userAge + " years old";
document.getElementById("userDistance").innerHTML = userDistance + " km";
document.getElementById("ticketFee").innerHTML = "€ " + ticketFee;
document.getElementById("finalTicketFee").innerHTML = "€ " + finalTicketFee;
