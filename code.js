let choix;
// demande de choix:
let restart = false // Par défaut, on ne repropose pas de nouveau calcul
do{
    
do {

     choix = Number( prompt(" Que souhaitez-vous faire?\n\n 1 - Addition\n 2 - Multiplication\n 3 - Soustraction\n 4 - Division\n")); 
     

} while ( isNaN(choix) ||  choix == null || choix == "" || choix > 4 ); 
// tant que choix n'est pas égale à 1,2,3 ou 4 , le prompt s'affiche. 
// Choix des deux nombres:

let premierNombre;
let deuxiemeNombre;


do {
    premierNombre =Number( prompt("Choississez un premier nombre"));
    deuxiemeNombre = Number( prompt("Choississez un deuxième  nombre"));
} while (isNaN(premierNombre) || isNaN(deuxiemeNombre) || premierNombre == "" || premierNombre == null) ;

// création des 4 fonctions 

function addition( nombreA, nombreB) {

    let resultatAddition = nombreA + nombreB;
    return resultatAddition;
    
}
let resultatAddition= addition(premierNombre, deuxiemeNombre);

function multiplication( nombreA, nombreB) {

    let resultatMultiplication = nombreA * nombreB;
    return resultatMultiplication;
    
}
let resultatMultiplication = multiplication(premierNombre, deuxiemeNombre);

function soustraction(nombreA, nombreB) {

    let resultatSoustraction = nombreA - nombreB;
    return resultatSoustraction;
    
}
let resultatSoustraction = soustraction(premierNombre, deuxiemeNombre);


function division(nombreA, nombreB) {
    // on crée une condition et on déclenche une erreur dans le cas ou l'utilisateur voudrait diviser par 0.
    if (nombreB == 0) {
        throw new Error ("Impossible de diviser par 0, cela est interdit.");
        
    }

    let resultatDivision = nombreA / nombreB;
    return resultatDivision;
    
}

let resultatDivision = division(premierNombre, deuxiemeNombre);

// Appeler la bonne fonction 
// Pour que l'exception soit prise en compte, il faut que le bloc Switch soit dans un bloc try :

try{
switch (choix) {
    case 1:
        resultatAddition= addition(premierNombre, deuxiemeNombre);
        alert( "voici le resultat: " + resultatAddition);
        break;
    case 2:
        resultatMultiplication= multiplication(premierNombre, deuxiemeNombre);
        alert( "Voici le resultat: " + resultatMultiplication);
        break;
    case 3:
        resultatSoustraction= soustraction(premierNombre, deuxiemeNombre) ;
        alert( "Voici le resultat: " + resultatSoustraction);
        break;
    case 4:
        resultatDivision= division(premierNombre, deuxiemeNombre);
        alert ("Voici le resulat: " + resultatDivision);
        break;           

    default:
        throw new Error ("Oups, Une erreur est survenue."); // pour lancer une exception on utilise le mot clé: throw new Error 
        break;
}
}
catch(error){
    alert(error);
}
 restart= confirm("Souhaitez-vous un nouveau calcul?")

}

 
while(restart);










