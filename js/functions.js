document.addEventListener('DOMContentLoaded', function () {
  var menuIcon = document.getElementById('menu-icon');
  var overlay = document.getElementById('overlay-menu');
  var categoriesContainer = document.getElementById('categories-container');

  menuIcon.addEventListener('click', function () {
    overlay.classList.toggle('active');
    categoriesContainer.classList.toggle('active');

    // Si el contenedor de categorías está activo, muestra los enlaces
    if (categoriesContainer.classList.contains('active')) {
      categoriesContainer.style.display = 'block';
    } else {
      categoriesContainer.style.display = 'none';
    }
  });

  overlay.addEventListener('click', function () {
    overlay.classList.remove('active');
    categoriesContainer.classList.remove('active');
    categoriesContainer.style.display = 'none'; // Oculta los enlaces cuando se hace clic en el overlay
  });
});

//Swiper index
document.addEventListener('DOMContentLoaded', function () {
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
/*
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
});*/

///Galeria imatges nova
document.addEventListener('DOMContentLoaded', function () {
  // Crear el contenedor del Swiper para la vista en grande
  var swiperImagenGrande = new Swiper('.swiper-container-imagen-grande', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  var zoomActivo = false;

  // Evento para mostrar la imagen en grande al hacer clic en una miniatura
  document.querySelectorAll('.galeria-miniaturas img').forEach((img, index) => {
    img.addEventListener('click', function () {
      document.querySelector('.imagen-grande').style.display = 'flex';
      swiperImagenGrande.removeAllSlides();

      // Agregar las imágenes a la vista en grande
      document.querySelectorAll('.galeria-miniaturas img').forEach((img, idx) => {
        const clone = img.cloneNode(true);
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide', 'swiper-slide-imagen-grande');
        slide.appendChild(clone);
        swiperImagenGrande.appendSlide(slide);

        // Establecer la diapositiva inicial si coincide con la imagen clicada
        if (idx === index) {
          swiperImagenGrande.slideTo(swiperImagenGrande.slides.length - 1, 0);
        }

        // Agregar el evento de clic para hacer zoom in/out en la imagen
        clone.addEventListener('click', function () {
          if (!zoomActivo) {
            clone.style.transformOrigin = '50% 50%';
            clone.style.transform = 'scale(2)';
            zoomActivo = true;
            swiperImagenGrande.allowSlideNext = false;
            swiperImagenGrande.allowSlidePrev = false;
          } else {
            clone.style.transformOrigin = '50% 50%';
            clone.style.transform = 'scale(1)';
            zoomActivo = false;
            swiperImagenGrande.allowSlideNext = true;
            swiperImagenGrande.allowSlidePrev = true;
          }
        });

      });
    });
  });

  // Evento para cerrar la imagen en grande al hacer clic en el botón de cerrar
  document.querySelector('.cerrado').addEventListener('click', function () {
    document.querySelector('.imagen-grande').style.display = 'none';
    swiperImagenGrande.removeAllSlides();
  });
});
