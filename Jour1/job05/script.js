function afficherJoursSemaines() {
    // Création du tableau des jours de la semaine
    let joursSemaines = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

    // Boucle for pour parcourir le tableau et afficher chaque jour
    for (let i = 0; i < joursSemaines.length; i++) {
        console.log(joursSemaines[i]);
    }
}

// Appel de la fonction pour l'exécution
afficherJoursSemaines();
