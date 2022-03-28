const payBtn = document.querySelector('.pay');
const form = document.querySelector('form');

function showModel() {
  document.querySelector('.model').classList.remove('hide');
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('hi');
  showModel();
});