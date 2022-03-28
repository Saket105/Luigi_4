const buyNouBtn = document.querySelectorAll('.buy-now');
const removeItemBtn = document.querySelectorAll('.remove-item');
const email = document.getElementById('email');

console.log('hi');


// Event listeners
buyNouBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const cartid = e.target.getAttribute('data-cartid');
    const productid = e.target.getAttribute('data-pid');
    console.log('buy now', 'cartid - ',cartid, 'pid - ', productid);
    const data = {
      productId: productid,
      cartId: cartid,
      email: email.value
    }
    fetch('http://localhost:3000/cart/move/buynow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((message) => {
        console.log(message);
        const li = e.target.parentElement;
        li.remove();
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

removeItemBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const cartid = e.target.getAttribute('data-cartid');
    const productid = e.target.getAttribute('data-pid');
    console.log('remove','cartid - ',cartid, 'pid - ', productid);
    const data = {
      cartId: cartid
    }
    fetch('http://localhost:3000/cart/delete-item', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((message) => {
        console.log(message);
        const li = e.target.parentElement;
        li.remove();
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
