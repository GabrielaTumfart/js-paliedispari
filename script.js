// * ESERCIZIO 1

/* Palidroma
Chiedere all’utente di inserire una parola //! se si legge uguale dalla sinistra alla destra
Creare una funzione per capire se la parola inserita è palindroma
*/

// chiedo una parola all'utente
const parolaUser = prompt("Scrivi una parola").trim();

// ora devo verificare se la parola dell'utente è palidroma

const verifica = isPalidroma(parolaUser);
console.log(verifica)


if (verifica) {
    console.log("La parola è Palidroma.")
} else {
    console.log("La parola non è Palidroma.")
    
}

function isPalidroma (parola) {
    console.log(parola)
    // ciao
    console.log(parola.split(""));
    const parolaAlContrario = parola.split("") // [ 'c', 'i', 'a', 'o']
        .reverse() // [ 'o', 'a', 'i', 'c']
        .join(""); //! ho preso da Tiziano // oaic

    // ciao == oiac

    console.log(parolaAlContrario);

    let palindroma = false;
    if (parola == parolaAlContrario){
        palindroma = true;
    }

    return palindroma;
}





// * EZERCIZIO 2:


/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// Chiedo all'utente di scegliere pari o dispari

const sceltaUser = prompt("Scegli pari o dispari").trim().toLowerCase();

// Chiedo all'utente di inserire un numero