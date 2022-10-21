"use strict";
// 1. Chiedi all'utente il numero di km che vuole percorrere e salva il dato
// const km = Number(prompt ("Inserisci il numero di km da percorrere") );
// console.log('Numero km che l\'utente vuole percorrere:', km);
// 2. Chiedi all'utente l'età del passeggero e salva il dato
// const age = Number(prompt ("Inserisci l'età del passeggero") );
// console.log('Età del passeggero:', age);
// if( isNaN(km) || isNaN(age) ) {
//     alert("Attento! Devi inserire dei numeri");
//     location.reload();
// }
// 3. Il prezzo del biglietto è definito in base al km (0.21 €/km)
let ageRange = document.getElementById('age-range').value;
let km = document.getElementById('km');
let price = km * 0.21;
let message = "Prezzo biglietto intero";
console.log(price, "€");
// 4. Determina il prezzo del biglietto finale
//    5a. SE il passeggero è minorenne va applicato uno sconto del 20%
//        ALTRIMENTI SE il passeggero ha un'età maggiore o uguale a 65 anni va applicato uno sconto del 40%
//        ALTRIMENTI il prezzo del biglietto sarà intero senza sconto

if( ageRange === "minor") {
    price -= price * 0.2;
    message = "Prezzo tariffa minorenni";
} else if ( ageRange === "over65" ) {
    price -= price * 0.4;
    message = "Prezzo tariffa over 65";
} 
console.log(`${price.toFixed(2)}€`);
console.log(message);
// 6. Stampa sulla pagina HTML il prezzo del biglietto del treno
document.querySelector("h1").innerHTML = price.toFixed(2) + "€";