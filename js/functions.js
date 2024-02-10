document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.getElementById('menu-icon');
    var overlay = document.getElementById('overlay-menu');
    var categoriesContainer = document.getElementById('categories-container');

    menuIcon.addEventListener('click', function() {
        overlay.classList.toggle('active');
        categoriesContainer.classList.toggle('active');
        
        // Si el contenedor de categorías está activo, muestra los enlaces
        if (categoriesContainer.classList.contains('active')) {
            categoriesContainer.style.display = 'block';
        } else {
            categoriesContainer.style.display = 'none';
        }
    });

    overlay.addEventListener('click', function() {
        overlay.classList.remove('active');
        categoriesContainer.classList.remove('active');
        categoriesContainer.style.display = 'none'; // Oculta los enlaces cuando se hace clic en el overlay
    });
});


//Slider presentacion fotos
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('slider');
    const slides = slider.querySelectorAll('img');
    const totalSlides = slides.length;
    const btnLeft = document.querySelector('.btn-left');
    const btnRight = document.querySelector('.btn-right');
    let currentIndex = 0;
  
    // Agregar eventos a los botones de navegación
    btnLeft.addEventListener('click', () => moveToSlide(currentIndex - 1));
    btnRight.addEventListener('click', () => moveToSlide(currentIndex + 1));
  
    // Función para mover el slider a un índice específico
    function moveToSlide(index) {
      if (index < 0) {
        index = totalSlides - 1; // Ir al último slide si estamos en el primer slide
      } else if (index >= totalSlides) {
        index = 0; // Ir al primer slide si estamos en el último slide
      }
  
      const offset = -index * 100; // Calcular el desplazamiento
      slider.style.transform = `translateX(${offset}%)`; // Aplicar el desplazamiento
      currentIndex = index; // Actualizar el índice actual
    }
  
    // Función para mover el slider hacia la derecha automáticamente cada 3 segundos
    function autoSlide() {
      moveToSlide(currentIndex + 1); // Mover al siguiente slide
    }
  
    // Iniciar el intervalo para el movimiento automático del slider
    let intervalId = setInterval(autoSlide, 1000);
  
    // Detener el movimiento automático cuando el mouse pasa sobre el slider
    slider.addEventListener('mouseenter', () => clearInterval(intervalId));
  
    // Reanudar el movimiento automático cuando el mouse sale del slider
    slider.addEventListener('mouseleave', () => {
      intervalId = setInterval(autoSlide, 3000);
    });
  });

  
  //Funcions galeria 
  document.addEventListener('DOMContentLoaded', function () {
    const imagenes = document.querySelectorAll('.imagen img');
    const modal = document.getElementById('modal');
    const imagenModal = document.getElementById('imagen-modal');
    const tituloModal = document.getElementById('titulo-modal');
    const cerrarModal = document.getElementById('cerrar');
    const anterior = document.getElementById('anterior');
    const siguiente = document.getElementById('siguiente');
    let imagenIndex = 0;
  
    // Array de títulos correspondientes a cada imagen
    const titulos = [
      'Habitació 1',
      'Habitació 2',
      'Habitació 3',
      "Sala d'estar",
      'Bany 2',
      'Cuina',
      'Habitació 4',
      'Menjador',
      'Cuina',
      'Bany 2',
      'Cuina',
      'Habitació 4',
      'Menjador',
      'Cuina'
      // ... Agrega títulos para cada imagen ...
    ];
  
    imagenes.forEach((imagen, index) => {
      imagen.addEventListener('click', () => {
        imagenIndex = index;
        mostrarImagen(index);
        modal.style.display = 'block';
      });
    });
  
    cerrarModal.addEventListener('click', () => {
      modal.style.display = 'none';
      imagenModal.classList.remove('zoomed'); // Elimina la clase de zoom al cerrar el modal
    });
  
    anterior.addEventListener('click', () => {
      imagenIndex = (imagenIndex - 1 + imagenes.length) % imagenes.length;
      mostrarImagen(imagenIndex);
    });
  
    siguiente.addEventListener('click', () => {
      imagenIndex = (imagenIndex + 1) % imagenes.length;
      mostrarImagen(imagenIndex);
    });
  
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
        imagenModal.classList.remove('zoomed'); // Elimina la clase de zoom al cerrar el modal
      }
    });
  
    function mostrarImagen(index) {
      imagenModal.src = imagenes[index].src;
      tituloModal.textContent = titulos[index]; // Actualiza el título
    }

    // Evento de doble clic para hacer zoom
    imagenModal.addEventListener('dblclick', function () {
      imagenModal.classList.toggle('zoomed');
    });
});
