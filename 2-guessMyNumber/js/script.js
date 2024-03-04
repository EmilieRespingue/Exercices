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
        //alert("Ceci n'est pas un nombre");
        document.getElementById("instruction").innerHTML = "Ceci n'est pas un nombre";
        console.log("isnan" + givenNumber); 
        return false;
        
    } else if (givenNumber < numberToGuess){
        //alert("Plus grand!");
        document.getElementById("instruction").innerHTML = "Plus grand !";
        return false;
        
    } else if (givenNumber > numberToGuess){
        //alert("Plus petit !");
        document.getElementById("instruction").innerHTML = "Plus petit !";
        return false;
        
    } else {
        document.getElementById("instruction").innerHTML = "";
        document.getElementById("container").innerHTML = "Congratulations !";
        return true;
    }
}

/**
* Executes the gameplay logic.
*
* @return {void} No return value.
*/
function gameplay() {
    let numberToGuess = chooseNumber();

    document.getElementById("guessSubmit").addEventListener('click', ()  =>{
        const guessedNumber = document.getElementById("guessField").value;
        console.log("onClick",guessedNumber);
        document.getElementById("guessField").value = "";
        return didIWin(guessedNumber, numberToGuess);
        });
}

gameplay();




