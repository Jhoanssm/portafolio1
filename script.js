document.addEventListener('DOMContentLoaded', function() {
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            document.querySelector('header').style.backgroundColor = '#1d3557';
        } else {
            document.querySelector('header').style.backgroundColor = '#2b2d42';
        }
    });
});


// Agregando animación al botón de navegación

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

//menu hamburguesa para nav-links

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('show');
    }
});

