const closeErrorBtn = document.querySelector('.close-error');
const email = document.getElementById('user-email');

console.log(email);


closeErrorBtn.addEventListener('click', () => {
  const errorElement = document.querySelector('.error-login');
  errorElement.classList.add('hide');
});