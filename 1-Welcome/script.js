
/**
 * Prompts the user to enter their name and then greets them.
 *
 * @return {string} the greeting message with the user's name
 */
function askName(){
    let userName = prompt("Quel est ton prenom?");
    let bienvenue = "Bonjour " + userName;
    return bienvenue;
}

document.body.innerHTML += "<h2>"+ askName() +"</h2>" 

/**
 * Prompts the user for their birth year, calculates their age, and returns the result.
 *
 * @return {number} the calculated age based on the user's input
 */
function askBirthYear(){
    let anneeNaissance = prompt("Quelle est ton annee de naissance ?");
    let currentYear = 2023;
    let anneeAge = currentYear - anneeNaissance;
    return anneeAge;
}

/**
 * Prompts the user to enter their birth month, calculates the difference in months between the current month and the birth month, and returns the result.
 *
 * @return {number} the difference in months between the current month and the birth month
 */
function askBirthMonth(){
    let birthMonth = prompt("Quel est le mois de ton anniversaire ?");
    let uneAnnee = ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"];
    let currentMonth = 10;
    let numberMonth;
        for(i=0; i<uneAnnee.length; i++){
            if (birthMonth == uneAnnee[i]){
               numberMonth = i+1;
            }
        }
    let moisAge = currentMonth - numberMonth;
    return moisAge;
}

document.body.innerHTML +=  "<h3>" + "Tu as " + askBirthYear() + " ans et " + askBirthMonth() + " mois" + "</h3>"
