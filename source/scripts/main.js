$(document).ready(function() {
    // Aplicar máscara al campo de teléfono
    $('#telefone').mask('(00) 00000-0000', { placeholder: '(__) _____-____' });

    // Configuración de validación del formulario
    $('#form').validate({
      rules: {
        nome: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        telefone: {
            required: true,
        },
        mensagem: {
          required: true
        }
      },
      messages: {
        nome: {
          required: 'Por favor, ingrese su nombre'
        },
        email: {
          required: 'Por favor, ingrese su dirección de correo electrónico',
          email: 'Ingrese una dirección de correo electrónico válida'
        },
        telefone: {
            required:'Por favor, ingrese su telefone'
        },
        mensagem: {
          required: 'Por favor, ingrese su mensaje'
        }
      },
      errorContainer: '.validation-errors',  // Contenedor que albergará todos los mensajes de error
      errorLabelContainer: '.validation-errors ul',  // Contenedor para la lista de mensajes de error
      wrapper: 'li',  // Etiqueta que envuelve cada mensaje de error en la lista
      highlight: function(element, errorClass, validClass) {
        $(element).addClass('is-invalid').removeClass('is-valid');
      },
      unhighlight: function(element, errorClass, validClass) {
        $(element).removeClass('is-invalid').addClass('is-valid');
      },
      submitHandler: function(form) {
        console.log(form);
        
      }
      
    });
  });