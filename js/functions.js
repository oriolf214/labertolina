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

//Swiper index
document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper(".swiper-hero", {
      direction: "horizontal",
      loop: true,
      autoplay: {
          delay: 2000,
          disableOnInteraction: false,
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
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




///Galeria imatges nova
