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

var hasNumber = /\d/;
function getValue(id) {
  return document.getElementById(id).value;
}

//function show when input invalid
function showError(id, text) { 
    if (text == null) { //this call when function showSuccess was call
      document.getElementById(id + "-error").innerHTML = text;
      setStateButton(false);
    }
    else { // this call when input is invalid
      document.getElementById(id + "-error").innerHTML = text;
      showSuccess(id, false)
      setStateButton(false);
    }
  }

//function show when input valid
function showSuccess(id, state) {
  if (state) {
    document.getElementById(id + "-success").innerHTML = "Look good!";
    showError(id, null);
    setStateButton(true);
  }
  else {
    document.getElementById(id + "-success").innerHTML = null;  
  }
}
 
function validateCardNumber() {
  var cardNumber = getValue("card-Number");
  if (isNaN(cardNumber)) {
  showError("card-Number", "Card number must be number");
  } else if (!cardNumber == true) {
    showSuccess("card-Number", false);
  } else {
  showSuccess("card-Number", true);
  }
}

function validateFirstname() { 
  var firstName = getValue("first-Name");
  if (hasNumber.test(firstName)) {
    showError("first-Name", "First name must not have number");
  } else if (!firstName == true) {  //check if input is null => turn off showerror and showsuccess
    showError("first-Name", null);
    showSuccess("first-Name", false);
  } else {
    showSuccess("first-Name", true);
  }
}

function validateLastName() {
  var lastName = getValue("last-Name");
  if (hasNumber.test(lastName)) {
    showError("last-Name", "Last name must not have number");
  } else if (!lastName == true) {
    showError("last-Name", null);
    showSuccess("last-Name", false);
  } else {
    showSuccess("last-Name", true);
    console.log(lastName);
  }
}

function validateEmail() {
  var email = getValue("email");
  if (!email == true) {
    showError("email", null)
    showSuccess("email", false);  
  }
  else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false) {
    showError("email", "This is not a true email");
  }  else {
    showSuccess("email", true);
  }
}

function checkDate(dateString) {
  let dateformat = /^(0?[1-9]|1[0-2])[\/](0?[1-9]|[1-2][0-9]|3[01])[\/]\d{4}$/;
  // Match the date format through regular expression
  if (dateString.match(dateformat)) {
    let operator = dateString.split("/");
    // Extract the string into month, date and year
    let datepart = [];
    if (operator.length > 1) {
      pdatepart = dateString.split("/");
    }
    let month = parseInt(datepart[0]);
    let day = parseInt(datepart[1]);
    let year = parseInt(datepart[2]);

    // Create list of days of a month
    let ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month == 1 || month > 2) {
      if (day > ListofDays[month - 1]) {
        ///This check is for Confirming that the date is not out of its range
        return false;
      }
    } else if (month == 2) { //wrong somthing (30/02 is true)
      let leapYear = false;
      if ((!(year % 4) && year % 100) || !(year % 400)) {
        leapYear = true;
      }
      if (leapYear == false && day >= 29) {
        return false;
      } else if (leapYear == true && day > 29) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
}

function validateDate() {
  var date = getValue("expiration");
  if (checkDate(date)) {
    showSuccess("expiration", true);
  } else if (!date == true) {
    showError("expiration",null)
    showSuccess("expiration", false);
  } 
  else {
    showError("expiration", "please enter true date");
  }
}

function validateCVV() {
  var cvv = getValue("cvv");
  if (/^\d{4}$/.test(cvv)) {
    showSuccess("cvv", true);
  } else if (!cvv == true) {
    showError("cvv", null);
    showSuccess("cvv", false);
  } 
  else {
    showError("cvv", "CVV must have 4 number");
  }
}

function setStateButton(state) {
  if (state) {
    document.getElementById("buttonSubmit").disabled = true;
  } else {
    document.getElementById("buttonSubmit").disabled = false;
  }
}