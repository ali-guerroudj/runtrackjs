function tri(numbers, order) {
    if (order === "asc") {
        numbers.sort(function(a, b) {
            return a - b;
        });
    } else if (order === "desc") {
        numbers.sort(function(a, b) {
            return b - a;
        });
    } else {
        console.log("Veuillez spécifier 'asc' ou 'desc' pour l'ordre de tri.");
        return;
    }
    return numbers;
}

// Exemple d'utilisation de la fonction
let tableau = [3, 1, 6, 2, 8, 4, 5];
let ordre = "asc"; // "asc" pour ordre ascendant, "desc" pour ordre descendant
let tableauTrié = tri(tableau, ordre);

// Affichage du tableau trié dans la console
console.log("Tableau trié (" + ordre + "): ", tableauTrié);

   