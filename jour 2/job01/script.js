document.getElementById('button').addEventListener('click', function() {
    citation();
});

function citation() {
    let citationText = document.getElementById('citation').textContent;
    console.log(citationText);
}