"use strict";
// 1. Chiedi all'utente il numero di km che vuole percorrere e importa il dato
// 2. Chiedi all'utente l'età del passeggero e importa il dato
// 3. Il prezzo del biglietto è definito in base al km (0.21 €/km)
// 4. Determina il prezzo del biglietto finale
//    4a. SE il passeggero è minorenne va applicato uno sconto del 20%
//        ALTRIMENTI SE il passeggero ha un'età maggiore o uguale a 65 anni va applicato uno sconto del 40%
//        ALTRIMENTI il prezzo del biglietto sarà intero senza sconto

const btnGenerator = document.getElementById('btn-generator');
btnGenerator.addEventListener('click', function() {
    const passengerData = document.getElementById('passenger-data').value;
    const ageRange = document.getElementById('age-range').value;
    let ticketType = "Biglietto Standard";
    const railwayWagon = Math.floor(Math.random() * 10) + 1;
    const codeCp = Math.floor(Math.random() * 10000) + 90000;
    const km = document.getElementById('km').value;
    let price = km * 0.21;
    let message = "Prezzo biglietto intero";
    console.log(price, "€");
    if( ageRange === "minor") {
        price -= price * 0.2;
        message = "Prezzo tariffa minorenni";
        ticketType = "Biglietto Giovani"
    } else if ( ageRange === "over65" ) {
        price -= price * 0.4;
        message = "Prezzo tariffa over 65";
        ticketType = "Biglietto Over 65";
    } 
    console.log(`${price.toFixed(2)}€`);
    console.log(message);
    console.log(passengerData);
    document.getElementById('passenger-name').innerHTML = passengerData;
    document.getElementById('ticket-type').innerHTML = ticketType;
    document.getElementById('railway-wagon').innerHTML = railwayWagon;
    document.getElementById('code-cp').innerHTML = codeCp;
    document.getElementById('ticket-price').innerHTML = price.toFixed(2) + "€";
});