/* Dieser Code wird während des Scrollens ausgeführt
   also immer dann, wenn min 1px nach unten oder oben gescrollt wird */
window.addEventListener('scroll', () => {

    // hier wird berechnet, ob das Ende der Seite erreicht wurde
    const hasReachedEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;

    // wenn das Ende erreicht ist, wird die Klasse 'scroll-ende' zum Body hinzugefügt
    if (hasReachedEnd) {
        document.body.classList.add('scroll-ende');
        audio1.play();
        audio2.play();
        audio2.loop = true;
    }
    // andernfalls wird die Klasse (wieder) entfernt
    else {
        document.body.classList.remove('scroll-ende');
        audio2.pause();
    }
    
});
