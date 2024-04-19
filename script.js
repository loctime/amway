document.addEventListener('DOMContentLoaded', function() {
    // Obtener todas las imágenes pequeñas de los sections
    var imagenesPequenas = document.querySelectorAll('.imagen');

    // Obtener todos los overlays de los sections
    var overlays = document.querySelectorAll('.overlay');

    // Obtener todos los botones de cerrar de los sections
    var botonesCerrar = document.querySelectorAll('.cerrar');

    // Función para abrir la imagen grande al hacer clic en la imagen pequeña
    imagenesPequenas.forEach(function(imagenPequena, index) {
        imagenPequena.addEventListener('click', function() {
            overlays[index].style.display = 'flex'; // Muestra la capa superpuesta al hacer clic en la imagen
        });
    });

    // Función para cerrar la imagen grande al hacer clic en el botón de cerrar
    botonesCerrar.forEach(function(botonCerrar, index) {
        botonCerrar.addEventListener('click', function() {
            overlays[index].style.display = 'none'; // Oculta la capa superpuesta al hacer clic en el botón de cerrar
        });
    });

    // Función para cerrar la imagen grande al hacer clic en cualquier lugar fuera de la imagen grande
    overlays.forEach(function(overlay) {
        overlay.addEventListener('click', function(event) {
            if (event.target === overlay) { // Verifica si el clic ocurrió en el fondo oscuro semi-transparente
                overlay.style.display = 'none'; // Oculta la capa superpuesta si se hace clic en el fondo oscuro semi-transparente
            }
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    var categorias = document.getElementById('categorias').getElementsByTagName('a');

    for (var i = 0; i < categorias.length; i++) {
        categorias[i].addEventListener('click', function(event) {
            event.preventDefault(); // Evitar que el enlace recargue la página

            var targetId = this.getAttribute('data-target');

            // Ocultar todas las secciones
            var secciones = document.querySelectorAll('main section.loc');
            secciones.forEach(function(seccion) {
                seccion.classList.add('oculto');
            });

            // Mostrar la sección correspondiente al enlace clicado
            var contenido = document.getElementById('contenido-' + targetId);
            contenido.classList.remove('oculto');
        });
    }
});
