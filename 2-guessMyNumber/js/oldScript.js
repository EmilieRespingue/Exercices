//Etape 1 - Demander un nombre à un utilisateur
let givenNumber = function chooseNumber(){
   return parseInt(prompt("Choisissez un nombre."));

}

function chooseNumber() {
    let numberToGuess = document.getElementById("nombreADeviner").value;
    //let numberToGuess = parseInt(prompt("Joueur 1 : Choisissez un nombre compris entre 0 et 50."));
    // while (numberToGuess < 0 || numberToGuess > 50) {
    //     console.log("Invalid input: " + numberToGuess);
    //     alert("Ceci n'est pas une réponse valide.");
    //     numberToGuess = parseInt(prompt("Joueur 1 :  Choisissez un nombre compris entre 0 et 50."));
        console.log("numberToGuess: " + numberToGuess);
    // }
    // return numberToGuess;
}


//Etape 2 - Pour le moment nous allons considérer que le nombre à deviner est 22. Écrire une fonction qui prend en paramètre givenNumber et qui se nommera didIWin.
// Si le nombre est plus petit que 22, on affichera à l’utilisateur “Plus grand”.
// Si le nombre est plus quand que 22 on affichera à l’utilisateur “Plus petit”.
// Si le nombre est 22 on affichera “Bravo ! Vous avez deviné le nombre”.

function didIWin(givenNumber){
    if (isNaN(givenNumber)){
        alert("Ceci n'est pas un nombre");
        console.log("isnan" + givenNumber); 
        return false;
    
    } else if (givenNumber < 22){
        alert("Plus grand!");
        return false;

    } else if (givenNumber > 22){
        alert("Plus petit !");
        return false;

    } else {
        alert("Vous avez gagné!");
        return true;
    }
}

// Creer une fonction gamePlay qui gérera vos appels de fonctions et la transmission de votre variable d’une fonction à une autre.

// function gameplay (){
// //le joueur donne un nombre
// //la fonction récupère ce nombre et fait des trucs jusqu'à ce que ce nombre soit correct
//     var givenNumber;

//     do {
//         givenNumber = chooseNumber()
//         if (isNaN(givenNumber)){
//             alert("Ceci n'est pas un nombre");
//             console.log("isnan" + givenNumber);
                    
//         } else {
//             didIWin(givenNumber);
//             console.log("else didIWin" + givenNumber);  
//         }

//     } while (givenNumber !== 22);

// } 

// gameplay();

// Essai de fonction récursive pour gameplay
    // function gameplay(){
    //     let givenNumber = chooseNumber();
    //         if (givenNumber === 22){
    //             return alert("Bravo ! Vous avez gagné!");
  
    //         } else if (givenNumber === ""){
    //             alert("Ceci n'est pas un nombre");
        
    //         } else {
    //             didIWin(givenNumber);
    //             if (givenNumber !== 22){
    //                 gameplay();
    //             }
    //         }      
    // }

// Etape 3 - Désormais la fonction didIWin devra retourner true si l’utilisateur a trouvé le chiffre, false sinon.
//Dans la fonction gamePlay, si didIWin a retourné true, on arrete le jeu. En revanche, si elle a retourné false, on redemande un chiffre à l’utilisateur.
function gameplay (){
    let givenNumber;
    do {
        givenNumber = chooseNumber();
    } while (!didIWin(givenNumber));

} 
    
gameplay();
