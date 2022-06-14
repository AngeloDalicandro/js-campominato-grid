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

const userDifficulty = parseInt(prompt('Seleziona una difficoltà: 1 (facile), 2 (medio) o 3 (difficile).'));

let maxRange = setDifficulty(userDifficulty);

let minRange = 1;
const bombNumber = 16;
const bombs = bombGenerator(minRange, maxRange, bombNumber);






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