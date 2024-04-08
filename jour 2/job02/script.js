document.getElementById('button').addEventListener('click', function() {
    showhide();
});

function showhide() {
    let article = document.getElementById('dynamicArticle');
    if (article) {
        // Si l'article existe déjà, le supprimer
        article.remove();
    } else {
        // Sinon, créer un nouvel article et l'ajouter au document
        let newArticle = document.createElement('article');
        newArticle.id = 'dynamicArticle';
        newArticle.textContent = 'L\'important n\'est pas la chute, mais l\'atterrissage.';
        document.body.appendChild(newArticle);
    }
}
