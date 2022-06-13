/* Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

const userWord = prompt('dimmi una parola');
const userWordPolindrome = isPolindromeWord(userWord);

if(userWordPolindrome === true) {
    alert('palindroma');
} else {
    alert('non palindroma');
}

// FUNZIONE che verifica se una parola è palindroma
// word -> parola da verificare
    // scriviamo la parola al contrario 
    //SE la parola al contrario è === alla parola data dall'utente, è vero
    //ALTRIMENTI è falso
// return: stringa, 'palindroma' se è palindroma, altrimenti 'non palindroma'

function isPolindromeWord(word) {
    let polindromeWord = false;

    // scorro la parola al contrario
    for(let i = word.length - 1; i >= 0; i--) {

        // stampo la parola al contrario, lettera per lettera
        let reverseWord = word[i]; 

        // SE la parola al contrario è === alla parola data dall'utente, è vero
        if (word === reverseWord) {
            polindromeWord = true;
        }
        
    }

    return polindromeWord;
}