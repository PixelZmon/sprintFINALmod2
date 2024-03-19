document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('fomulario-de-contacto'); 
   
     form.addEventListener('submit', function(event) {
       event.preventDefault();
       //* Antes de hacer submit el formulario este validado
       clearErrors();
       if(validateForm()) {
         // llamar a un función que me permita comunicarme con el servidor
         submitForm();
       }
     });
     function validateForm() {
        let isValid = true; 
        const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();

      if(!validateLength(nombre, 3) ) {
        alertify.alert("Validacion de Formulario", "El nombre debe tener al menos 3 caracteres");
        isValid = false;
        return
        
      }
  
      if(!validateEmail(email)) {
        alertify.alert("Validacion de Formulario", "El email no es válido");
        isValid = false;
        return
      }
  
      if(!validateLength(mensaje, 26)) {
        alertify.alert("Validacion de Formulario", "El mensaje debe ser de al menos 26 caracteres");
        isValid = false;
        return
      }
  
      return isValid;
    }
  
    function validateLength(value, minLength) {
      return value.length >= minLength;
    }
  
    function validateEmail(email) {
      // email es sofiorreo.com
      const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return regex.test(email);
    }
  
    function setError(errorId, message) {
      const errorElement = document.getElementById(errorId);
      errorElement.textContent = message;
      errorElement.style.display = 'block';
  
    }
  
    //* Limpiar los mensajes de error
    function clearErrors() {
      // lo vamos aplicar en caso de que existan mas de un mensaje de error
      const errorElements = document.querySelectorAll('.invalid-feedback');
      /* 
      errorElements[
        '<div id="errorNombre" class="invalid-feedback"></div>',
        '<div id="errorEmail" class="invalid-feedback"></div>',
        '<div id="errorArea" class="invalid-feedback"></div>'
      ];
  
      */
      errorElements.forEach((element) => {
        element.style.display = 'none';
      });
    }
  
    // function clearError(errorId) {
    //   const errorElement = document.getElementById(errorId);
    //   errorElement.style.display = 'none';
    // }
    
  });
  function submitForm() {
       alertify.confirm("Envio de Mensaje", "¿Desea Enviar el Mensaje?", function(){ alertify.success("Mensaje Enviado con Exito...!") }
              , function(){ alertify.error("Cancelado")});

}


