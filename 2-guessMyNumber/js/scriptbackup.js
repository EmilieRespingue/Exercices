/**
* Prompts the player 1 to choose a number between 0 and 50 and validates the input.
*
* @return {number} The chosen number between 0 and 50.
*/
function chooseNumber() {
    
    let numberToGuess = parseInt(prompt("Joueur 1 : Choisissez un nombre compris entre 0 et 50."));
    while (numberToGuess < 0 || numberToGuess > 50) {
        console.log("Invalid input: " + numberToGuess);
        alert("Ceci n'est pas une réponse valide.");
        numberToGuess = parseInt(prompt("Joueur 1 :  Choisissez un nombre compris entre 0 et 50."));
        console.log("numberToGuess: " + numberToGuess);
    }
    return numberToGuess;
}

/**
* Determines if the given number matches the number to guess.
*
* @param {number} givenNumber - The number provided by the user.
* @param {number} numberToGuess - The number to be guessed.
* @return {boolean} Returns true if the given number matches the number to guess, false otherwise.
*/

function didIWin(givenNumber, numberToGuess){
    
    if (isNaN(givenNumber)){
        alert("Ceci n'est pas un nombre");
        console.log("isnan" + givenNumber); 
        return false;
        
    } else if (givenNumber < numberToGuess){
        alert("Plus grand!");
        return false;
        
    } else if (givenNumber > numberToGuess){
        alert("Plus petit !");
        return false;
        
    } else {
        alert("Vous avez gagné!");
        return true;
    }
}

/**
* Executes the gameplay logic.
*
* @return {void} No return value.
*/
function gameplay() {
    let guessedNumber;
    let numberToGuess = chooseNumber();
    do {
        guessedNumber = parseInt(prompt("Joueur 2 : Devinez le nombre choisi par le joueur 1. Il est compris entre 0 et 50."));
        console.log("guessedNumber:", guessedNumber);
    } while (!didIWin(guessedNumber, numberToGuess));
    
    console.log("Gameplay finished.");
}

gameplay();


