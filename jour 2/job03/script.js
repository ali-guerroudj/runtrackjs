document.getElementById('button').addEventListener('click', function() {
    addOne();
});

function addOne() {
    var compteur = document.getElementById('compteur');
    var count = parseInt(compteur.textContent, 10);
    compteur.textContent = count + 1;
}
