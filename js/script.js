// L'utente indica un livello di difficoltà (con un prompt) in base al quale decidiamo il range di numeri possibili del gioco:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito attraverso dei prompt l'utente inserisce un numero alla volta finche il gioco non è finito:
// se il numero è presente nella lista dei numeri generati, abbiamo calpestato una bomba, il gioco finisce con un messaggio di errore
// Altrimenti il gioco va avanti a meno di aver raggiunto il numero massimo di tentativi possibili. In questo caso il gioco finisce con un messaggio di vittoria.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha scelto un numero che non era una bomba.

// Chiedo all'utente di selezionare la difficoltà
const userDifficulty = parseInt(prompt('Seleziona una difficoltà: 1 (facile), 2 (medio) o 3 (difficile).'));
// Imposto il maxRange con una funzione in base alla scelta dell'utente
let maxRange = setDifficulty(userDifficulty);
// Hardcodo il minRange
const minRange = 1;
// Hardcodo il numero di bombe
const bombNumber = 16;
// Genero l'array con le bombe con la funzione
const bombs = bombGenerator(minRange, maxRange, bombNumber);
// Constato quanti tentativi ha l'utente per vincere il gioco
const userAttempts = 2; 
// maxRange - bombNumber; 

// Passo a impostare il gioco una volta definite le variabili
// Creo una condizione che se falsa termina il gioco
let continueGame = true;
// Creo l'array dove salvare le scelte dell'utente
let userPicksArray = [];
// Creo la variabile per il messaggio da dare all'utente
let userMessage;

// Creo una variabile per il messaggio per l'utente in cui vinca o perda il gioco
while(continueGame) {
    // Chiedo un numero all'utente
    let userPick = parseInt(prompt('Dammi un numero da 1 a ' + maxRange));

    // Se il numero scelto dall'utente è una bomba termino il gioco e l'utente ha perso
    if(bombs.includes(userPick)) {
        userMessage = 'Mi dispiace, hai perso :(';
        continueGame = false;
    } else {
        // Se il numero scelto dall'utente non è una bomba lo salvo nell'array apposito
        if(!userPicksArray.includes(userPick)) {
            userPicksArray.push(userPick);
        }
        // Se la lunghezza dell'array è pari al numero di tentativi previsti termino il gioco e l'utente ha vinto
        if(userPicksArray.length === userAttempts) {
            userMessage = 'Complimenti, hai vinto :)';
            continueGame = false;
        } 
    }
} 

// Comunico all'utente l'esito della partita
alert(userMessage);



// ----------
// FUNZIONI
// ----------


// FUNZIONE PER GENERARE 16 BOMBE
function bombGenerator(minRange, maxRange, bombNumber) {
    // Creo l'array vuoto da ritornare come valore
    let bombs = [];
    // Imposto il ciclo in modo tale che si ripeta fin quando 
    let i = bombs.length;
    while(i < bombNumber) {
        // Genero un numero random da 1 al maxRange
        let casualBomb = getRndInteger(minRange, maxRange);
        // Lo pusho nell'array solo se non vi è già presente lo stesso numero
        if(!bombs.includes(casualBomb)) {
            bombs.push(casualBomb);
            i++
        }
    }
    // Ritorno l'array
    return bombs;
}

// FUNZIONE PER SELEZIONARE LA DIFFICOLTà 
function setDifficulty(userDifficulty) {
    let maxRange;
    if (userDifficulty === 1) {
        maxRange = 100;
    } else if (userDifficulty === 2) {
        maxRange = 81;
    } else if (userDifficulty === 3) {
        maxRange = 49;
    }

    return maxRange;
}
    
// FUNZIONE PER GENERARE UN NUMERO RANDOM DATO UN NUMERO MASSIMO E UN MINIMO (da W3Schools)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

