/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

// chiediamo all'utente se sceglie pari o dispari e un numero da 1 a 5
const userEvenOrOdd = prompt('scegli: pari o dispari?')
const userNumber = parseInt(prompt('scegli un numero da 1 a 5'))

// generiamo un numero random per il computer utilizzando la funzione getRndInteger
const randomNumber = getRndInteger(1, 5);

// sommiamo il numero dell'utente e il numero del computer
const sum = userNumber + randomNumber;
console.log(sum);

// verifichiamo chi ha vinto utilizzando la funzione isEvenOrOdd per capire se sum è pari o dispari
let result = isEvenOrOdd(sum);

// SE result è uguale alla scelta dell'utente, l'utente vince
// ALTRIMENTI l'utente perde
if(result === userEvenOrOdd) {
    alert('hai vinto! :D');
} else {
    alert('hai perso! :(');
}

/*********
 funzioni
**********/

// FUNZIONE per generare un numero random per il computer
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// creiamo una funzione per verificare se sum è pari o dispari
// number -> numero da valutare
// return: stringa, 'even' se è pari altrimenti 'odd'
function isEvenOrOdd(number) {
    let evenOrOdd;

    // SE il numero diviso 2 dà resto 0, il numero è pari
    //ALTRIMENTI è dispari
    if(number % 2 === 0) {
        evenOrOdd = 'pari';
    } else {
        evenOrOdd = 'dispari';
    }

    return evenOrOdd;
}