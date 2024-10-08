// Inicializa EmailJS con tu User ID
(function() {
  emailjs.init('23oWOPfOP3YlBeQOJ');  // Reemplaza 'YOUR_USER_ID' con tu User ID de EmailJS
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

  console.log('Formulario enviado!');

  // Obtener los datos del formulario
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('comments').value
  };

  // Enviar el correo a través de EmailJS
  emailjs.send('service_bertolina', 'template_bertolina', formData)
    .then(function(response) {
      console.log('Correo enviado con éxito!', response.status, response.text);
      alert('¡Mensaje enviado con éxito!');
    }, function(error) {
      console.error('Error al enviar el correo:', error);
      alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    });
});