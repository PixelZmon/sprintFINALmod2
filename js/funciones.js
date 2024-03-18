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

        if(!validateLength(nombre, 2)) {
            setError ('errorNombre', 'El nombre debe tener mínimo 2 carácteres');
            isValid = false;
        }
        if(!validateEmail(email)) {
            setError('errorEmail','El email ingresado no es válido')
            isValid = false;
        }
        if(!validateLength(mensaje, 30)) {
            setError('errorArea','El mensaje debe tener mínimo 20 carácteres')
            isValid = false;
        }
        return isValid;
     }
     function validateLength(value, minLength) {
        return value.length >=minLength;
     }
     function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
     }
     
     function setError(errorId, message) {
        const errorElement = document.getElementById(errorId);
        errorElement.textContent = message;
        errorElement.style.display = 'block';
     }

     function clearErrors() {
        const errorElements = document.querySelectorAll('.invalid-feedback');

        errorElements.forEach((element) => {
            element.style.display = 'none';
        });
    }

        function submitForm() {
            alert('Formulario enviado correctamente')
          }
        }
);

