document.addEventListener('DOMContentLoaded', function() {
    var musica = document.getElementById('musica');
    musica.volume = 0.5;
    
    // Modal de Fotos
    var modal = document.getElementById('modalFotos');
    var btnVerMaisFotos = document.getElementById('verMaisFotos');
    var spanClose = document.getElementsByClassName('close')[0];
    
    btnVerMaisFotos.onclick = function() {
        modal.style.display = 'block';
    }
    
    spanClose.onclick = function() {
        modal.style.display = 'none';
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
    
    // Botões de tema
    var lightModeButton = document.getElementById('light-mode');
    var darkModeButton = document.getElementById('dark-mode');
    
    lightModeButton.onclick = function() {
        document.body.classList.remove('dark-theme');
    }
    
    darkModeButton.onclick = function() {
        document.body.classList.add('dark-theme');
    }
    
    // Lógica para Abrir a Carta
    var openLetterButton = document.getElementById('open-letter-button');
    var letterContainer = document.querySelector('.letter-container');
    var mainContent = document.querySelector('.container');
    
    mainContent.style.display = 'none'; // esconde o container
    openLetterButton.onclick = function() {
        letterContainer.style.display = 'none';
        mainContent.style.display = 'block';
        // Toca a música ao abrir a carta
        musica.play();
    };
    
    // Slideshow
    let slideIndex = 0;
    showSlides();
    
    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("slide");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        setTimeout(showSlides, 4000); // Change image every 4 seconds
    }
});