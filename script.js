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

const numeroUser = prompt("Scegli un numero da 1 a 5");  

// adesso genero un numero a caso per il computer

const numeroComputer = numeroRandom();

// soma del numero utente + numero computer

const somma = numeroUser + numeroComputer;

// verifica se la soma è un numero pari oppure un numero dispari

const risultato = numeroPariOppureDispari(somma);
console.log("Risultato della somma"), risultato;

// controllo di chi ha vinto

if (risultato == numeroUser) {
    console.log("L'utente ha vinto!");
    
} else {
    console.log("L'utente ha perso!");
    
}


// funzione per creare il numero da 1 a 5 - userò il Random che abbiamo visto oggi

function numeroRandom() {
    const numero = Math.floor(Math.random()* 5 + 1); //! ho preso da Tiziano
    return numero;
    
}

// funzione che controlla se il numero è pari o dispari

function numeroPariOppureDispari(numero) {
    let risultato = "dispari";
    
    if (numero % 2 == 0) {
        risultato = "pari";
        
    } 
        
    return risultato
    
}