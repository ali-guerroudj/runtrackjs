// Fonction pour vérifier si un nombre est premier
function estPremier(nombre) {
    if (nombre < 2) {
       return false;
    }
    for (let i = 2; i <= Math.sqrt(nombre); i++) {
       if (nombre % i === 0) {
         return false;
       }
    }
    return true;
   }
   
   // Fonction principale pour sommer deux nombres premiers
   function sommeNombresPremiers(nombre1, nombre2) {
    if (estPremier(nombre1) && estPremier(nombre2)) {
       return nombre1 + nombre2;
    } else {
       return false;
    }
   }
   
   // Exemple d'utilisation
   console.log(sommeNombresPremiers(3, 5)); // Retourne 8
   console.log(sommeNombresPremiers(4, 5)); // Retourne false
   