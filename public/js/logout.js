const user = document.querySelector('.logout-user');
const logoutform = document.querySelector('.cover');
const cancelLogoutBtn = document.querySelector('.cancel-logout');

//functions
function toggleLogoutForm() {
  logoutform.classList.toggle('hide');
}

user.addEventListener('click', (e) => {
  toggleLogoutForm();
});

logoutform.addEventListener('click', (e) => {
  if(e.target.classList.contains('cover')) {
    toggleLogoutForm();
  }
});

cancelLogoutBtn.addEventListener('click', (e) => {
  e.preventDefault();
  toggleLogoutForm();
});