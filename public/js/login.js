const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const removeErrorBtn = document.querySelector('.fa-times');

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
    return true;
  } else {
    showError(input, 'Email is not valid');
  }
}

// Check required fields
function checkRequired(inputArr) {
  let flag = 1;
  inputArr.forEach(function(input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
      flag = 0;
    } else {
      showSuccess(input);
    }
  });
  if(flag){
    return true;
  }
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
    return true;
  }
}


// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event 
if(removeErrorBtn){
  removeErrorBtn.addEventListener('click', (e) => {
    const parentDiv = e.target.parentElement;
    parentDiv.classList.add('hide-error')
  });
}


form.addEventListener('submit', function(e) {
  e.preventDefault();
  let v1 = checkRequired([email, password]);
  let v2 = checkLength(password, 6, 25);
  let v3 = checkEmail(email);

  if(v1 && v2 && v3){
    form.submit();
  }
});

