// * ESERCIZIO 1

/* Palidroma
Chiedere all’utente di inserire una parola //! se si legge uguale dalla sinistra alla destra
Creare una funzione per capire se la parola inserita è palindroma
*/

// chiedo una parola all'utente
const parolaUser = prompt("Scrivi una parola").trim();

// ora devo verificare se la parola dell'utente è palidroma

const verifica = isPalidroma(parolaUser);

if (verifica) {
    console.log("La parola è Palidroma.")
} else {
    console.log("La parola non è Palidroma.")
    
}

function isPalidroma (parola) {
    const parolaAlContrario = parola.split().reverse().join(); //! ho preso da Tiziano
    return parola;

}





// * EZERCIZIO 2:


/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/