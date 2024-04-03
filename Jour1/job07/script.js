function jourTravaille(date) {
    let annee = date.getFullYear();
    let mois = date.getMonth() + 1; // Les mois sont indexés à partir de 0, donc on ajoute 1
    let jour = date.getDate();

    // Tableau des jours fériés en 2024
    let joursFeries = [
        "2024-01-01", // Nouvel An
        "2024-04-01", // Fête du Travail
        "2024-05-08", // Victoire des Alliés
        "2024-05-30", // Ascension
        "2024-06-10", // Pentecôte
        "2024-07-14", // Fête Nationale
        "2024-08-15", // Assomption
        "2024-11-01", // Toussaint
        "2024-11-11", // Armistice
        "2024-12-25"  // Noël
    ];

    let jourFerie = joursFeries.includes(annee + "-" + mois.toString().padStart(2, "0") + "-" + jour.toString().padStart(2, "0"));

    let jourSemaine = date.getDay(); // Récupérer le jour de la semaine (0 pour dimanche, 1 pour lundi, ..., 6 pour samedi)

    if (jourFerie) {
        console.log("Le " + jour + "/" + mois + "/" + annee + " est un jour férié.");
    } else if (jourSemaine === 0 || jourSemaine === 6) {
        console.log("Non, le " + jour + "/" + mois + "/" + annee + " est un week-end.");
    } else {
        console.log("Oui, le " + jour + "/" + mois + "/" + annee + " est un jour travaillé.");
    }
}

// Exemple d'utilisation de la fonction
let dateTest = new Date(2024, 0, 1); // Date de test : 1er janvier 2024
jourTravaille(dateTest);
