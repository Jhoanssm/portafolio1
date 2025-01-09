// Añadir funcionalidades de interactividad si se necesita
document.addEventListener('DOMContentLoaded', function() {
    // Aquí puedes agregar animaciones o cualquier interacción
    // Ejemplo: Cambiar color de fondo al hacer scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            document.querySelector('header').style.backgroundColor = '#1d3557';
        } else {
            document.querySelector('header').style.backgroundColor = '#2b2d42';
        }
    });
});
