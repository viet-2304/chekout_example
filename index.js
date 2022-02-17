// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation')
  
      // Loop over them and prevent submission
      Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
    }, false)
  })()
  
  function getValue(id) {
      return document.getElementById(id).value;
  }

  function showError(id, text) {
    document.getElementById(id + "-error").innerHTML =id + " " + text;
  }

  function validate() {
      var firstName = getValue('first-Name');
      var lastName = getValue('last-Name');
      var hasNumber= /\d/;
      if(hasNumber.test(lastName))
      {
        showError('last-Name', 'must not have number');
      }
      if(hasNumber.test(firstName))
      {
        showError('first-Name', 'must not have number');
      }
      var cardNumber = getValue('card-Number');
      if(isNaN(cardNumber)) {
         showError('card-Number', 'must be number');
      } 
  }