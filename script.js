/**
 * @author: LASME Ayou Emeline
 */


/**************************** EXERCI4C1: DEBUT ***********************************/
/**
 * @description : Écrivez un programme pour vérifier si une chaîne est vide ou non.
 */
// resolutio de l'exercice en utilisant la condition
let chaine = "";
if (chaine == "") {
    console.log("La variable est vide")
}else{
    console.log("La variable n'est pas vide");
}

// resolution de l'exercice en utilisant isBlank
function isBlank(chaine){
    if(chaine.toString().length == "") {
        return false;
    }
    return true;
}
isBlank('');
/* ***************************** Fin Exercice 1 ********************************* */



/* *************************** Exercice 2 : Debut ******************************** */
function abbrevName(chaine) {
    // cette fonction fais les abbréviations d'une chaine de caractère
    // chaine represente la chaine à abreger
    // abbrevTab représente le contenu dans notre chaine
    let abbrevTab = chaine.toString().split(" ");
    if(abbrevTab.length > 1) {
        return `${abbrevTab[0]} ${abbrevTab[1].charAt(0)}.`;
    }
    return chaine;
}
abbrevName("Robin Singh");

/* ***************************** Fin Exercice 2 ********************************* */



/* ***************************** Debut Exercice 3 ********************************* */

function casse(chaine) {
    // cette fonction permet de remplacer toutes les majuscules par des miniscules et vice verca
    // chaine represente chaine sur laquelle on travail
    // table represente tableau qui contient les mots de notre chaine
    // tabMotFormate represente tableau contenant les mots reformatter

    let table = chaine.split(" ");
    let tabMotFormate = [];

    for(let mot of table) {
        if(mot.charAt(0) == mot.charAt(0).toUpperCase()) {

            mot = mot.charAt(0).toLowerCase() + mot.substring(1).toUpperCase();
            tabMotFormate.push(mot);

        }
        else {

            mot = mot.charAt(0).toUpperCase() + mot.substring(1).toLowerCase();
            tabMotFormate.push(mot);

        }
    }

    console.log(tabMotFormate.join(" "));

}
casse("La plus belle fille");

/* *************************** Fin Exercice 3 ************************************** */




/* *********************************** Exercice 4 : Debut ************************* */

function isOmnipresent(tableau, nombre) {
//  cette fonction permet de vérifier si un chiffre est présente dans un tableau composé de sous tableau
    //  array represente tableau de sous tableau
    //  number represente nombre à vérifier dans le tableau
    //  nombreFois represente le nombre de fois ou on trouve le nombre dans le tableau
    let nombreFois = 0;
    for(let item of tableau) {
        for(let i of item) {
            if(i == nombre) {
                nombreFois++;
            }
        }
    }
    if(nombreFois >= tableau.length) {
        return true;
    }
    return false;
}
isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6);

/* *************************** Fin Exercice 4 ************************************** */









