const deleteItemBtns = document.querySelectorAll('.delete-item');
const moveToCartBtns = document.querySelectorAll('.move-to-cart');
const placeOrderBtn = document.getElementById('place-order');
const email = document.getElementById('email');


//helper functions
// function toggleConfirmPurchase () {
//   modelConfirmPurchase.classList.toggle('hide');
// }

function confirmOrders () {
  const purchaseIds = [];
  const prodIds = [];

  moveToCartBtns.forEach(btn => {
    const purchaseId = btn.getAttribute('data-purchase-id');
    purchaseIds.push(purchaseId);
    const prodId = btn.getAttribute('data-prodid');
    prodIds.push(prodId);
  });

  let data = {purchaseIds: purchaseIds, prodIds: prodIds};

  fetch('http://localhost:3000/buynow/confirm-purchase', {
    method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      document.querySelector('.cart-list').innerHTML = '';
    })
    .catch((err) => {
      console.log(err);
    });

}

function getPaymentsPage() {
  const purchaseIds = [];

  moveToCartBtns.forEach(btn => {
    const purchaseId = btn.getAttribute('data-purchase-id');
    purchaseIds.push(purchaseId);
  });

  let data = {purchaseIds: purchaseIds};

  fetch('http://localhost:3000/buynow/get-payments', {
    method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  });
}

// event listeners
deleteItemBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const purchaseId = e.target.getAttribute('data-purchase-id');
    const useremail = email.value;

    let data = {purchaseId: purchaseId};

    fetch('http://localhost:3000/buynow/delete-item', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(response => {
        console.log(response);
        const li = e.target.parentElement;
        li.remove();
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

moveToCartBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const purchaseId = e.target.getAttribute('data-purchase-id');
    const prodId = e.target.getAttribute('data-prodid');
    const useremail = email.value;


    let data = {
      purchaseId: purchaseId, 
      email: useremail,
      prodId: prodId
    };

    fetch('http://localhost:3000/buynow/move-to-cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(response => {
        console.log(response);
        const li = e.target.parentElement;
        li.remove();
      })
      .catch((err) => {
        console.log(err);
      });
  });
});


placeOrderBtn.addEventListener('click', (e) => {
  confirmOrders();
  document.querySelector('.thank-you').classList.remove('hide');
});

// modelConfirmPurchase.addEventListener('click', (e) => {
//   if(e.target.classList.contains('confirm-purchase')){
//     toggleConfirmPurchase();
//   }
// });