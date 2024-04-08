window.addEventListener('scroll', function() {
    var scrollPercent = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    var footer = document.querySelector('footer');
    var colorValue = Math.round(scrollPercent * 255);
    footer.style.backgroundColor = 'rgb(' + colorValue + ', 0, 0)';
});
