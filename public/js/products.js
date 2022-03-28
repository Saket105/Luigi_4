const buyNowBtns = document.querySelectorAll('.buy-now');
const addToCartBtns = document.querySelectorAll('.add-to-cart');
const userEmail = document.getElementById('email').value;
const closeErrorBtn = document.querySelector('.close-error');


// checking login and showing errors
function showError() {
  const errorElement = document.querySelector('.error-login');
  errorElement.classList.remove('hide');
  setTimeout(() => {
    if(! errorElement.classList.contains('hide')){
      errorElement.classList.add('hide');
    }
  }, 3000);
}

function checkLogin() {
  if( userEmail != 'false'){
    return true;
  }

  showError();
  return false;
}

// helper functions
async function buyProductHandler(event) {
  let state = checkLogin();
  if(! state){
    return;
  }

  const prodId = event.target.getAttribute('data-id');
  const data = {
    id: prodId,
    email: userEmail
  };
  console.log('buy now', data);
  let result = await fetch('http://localhost:3000/buynow', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

function addToCartHandler(event) {
  let state = checkLogin();
  if(! state){
    return;
  }

  const prodId = event.target.getAttribute('data-id');
  const data = {
    email: userEmail,
    id: prodId
  };
  console.log('add to cart  ', data);
  fetch('http://localhost:3000/addtocart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

//Event listeners
buyNowBtns.forEach(buyBtn => {
  buyBtn.addEventListener('click', buyProductHandler);
});

addToCartBtns.forEach(cartBtn => {
  cartBtn.addEventListener('click', addToCartHandler);
});

closeErrorBtn.addEventListener('click', () => {
  const errorElement = document.querySelector('.error-login');
  errorElement.classList.add('hide');
});