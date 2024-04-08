document.addEventListener('keydown', function(event) {
    var keylogger = document.getElementById('keylogger');
    var key = event.key.toLowerCase();

    // Vérifie si la touche pressée est une lettre (a-z)
    if (key >= 'a' && key <= 'z') {
        // Si le textarea a le focus, ajoute la lettre deux fois
        if (document.activeElement === keylogger) {
            keylogger.value += key + key;
        } else {
            // Sinon, ajoute la lettre une fois
            keylogger.value += key;
        }
    }
});
