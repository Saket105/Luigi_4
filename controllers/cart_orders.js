const cartbuydb = require('../models/cart_buydb');
const shopdb = require('../models/shopdb');
const loginHandler = require('../util/loginHandler');


function getUser (){
  const email = loginHandler.getUserEmail();
  let name = '';
  if(email){
    name = email.split('@')[0];
  }
  return [name, email];
}


exports.getCart = (req, res, next) => {

  const [name, email] = getUser();

  if(! email) {
    res.render('index', {
      name : name,
      email: email
    });

  }else {
    
    cartbuydb.getCartItems(email)
      .then((response) => {
        let cartItems = response[0];
        res.render('pages/cart', {
          name : name,
          email: email,
          items: cartItems
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

exports.deleteFromCart = (req, res, next) => {
  const cartId = req.body.cartId;

  cartbuydb.deleteFromCart(cartId)
    .then(() => {
      res.json({message: 'ok'});
    })
    .catch((err) => {
      res.json({message: 'failed'});
    });
}

exports.moveToBuyNow = (req, res, next) => {
  const productId = req.body.productId;
  const cartId = req.body.cartId;
  const email = req.body.email;

  cartbuydb.deleteFromCart(cartId);
  shopdb.buyNow(email, productId)
    .then(() => {
      res.json({message: 'ok'});
    })
    .catch((err) => {
      console.log(err);
      res.json({message: 'error'});
    });
}

exports.getBuyNow = (req, res, next) => {
  const [name, email] =  getUser();

  if(! email) {
    res.render('index', {
      name: name,
      email: email
    });
  } else {

    cartbuydb.getBuyNowItems(email)
      .then((response) => {
        let buyNowItems = response[0];
        res.render('pages/buynow', {
          name : name,
          email: email,
          items: buyNowItems
        });
      })
  }
}

exports.deleteBuynowItem = (req, res, next) => {
  const purchaseId = req.body.purchaseId;

  let message = '';
  cartbuydb.deleteBuyNowItem(purchaseId)
    .then((result) => {
      message = 'ok';
      res.json({message: message});
    })
    .catch((err) => {
      console.log(err);
      message = 'failed';
      res.json({message: message});
    });

}

exports.moveToCart = async (req, res, next) => {
  const email = req.body.email;
  const purchaseId = req.body.purchaseId;
  const prodId = req.body.prodId;

  cartbuydb.deleteBuyNowItem(purchaseId);

  const result = await shopdb.addTOCart(email, prodId);
  let message = '';
  if(result) {
    message = 'ok';
  } else {
    message = 'failed';
  }

  res.json({message: message});
}

exports.confirmOrders = (req, res, next) => {
  const purchaseIds = req.body.purchaseIds;
  const prodIds = req.body.prodIds;

  purchaseIds.forEach((id, index) => {
    cartbuydb.confirmOrder(id, prodIds[index]);
  });

  res.json('all Done');
}

exports.getOrders = (req, res, next) => {
  const [name, email] = getUser();

  if(! email) {
    res.render('index', {
      name : name,
      email: email
    });

  } else {

    cartbuydb.getConfirmedOders(email)
      .then(([orderItems]) => {
        res.render('pages/orders', {
          name : name,
          email: email,
          items:orderItems
        });
      })
      .catch((err) => {
        console.log(err);
      });

  }

}

exports.getPayments = (req, res, next) => {
  const [name, email] = getUser();

  res.render('pages/payments', {
    name : name,
    email: email 
  });
};