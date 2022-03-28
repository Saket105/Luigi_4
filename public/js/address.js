const form = document.querySelector('form');
const state = document.getElementById('state');
const city = document.getElementById('city');
const pincode = document.getElementById('pincode');
const houseno = document.getElementById('houseno');

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

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

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
  if (flag){
    return true;
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let result = checkRequired([state, city, pincode, houseno]);

  if(result){
    form.submit();
  }
});