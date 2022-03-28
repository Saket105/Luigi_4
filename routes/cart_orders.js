const express = require('express');

const cartController = require('../controllers/cart_orders');

const router = express.Router();

router.get('/cart', cartController.getCart);

router.post('/cart/delete-item', cartController.deleteFromCart);

router.post('/cart/move/buynow', cartController.moveToBuyNow);

router.get('/buynow', cartController.getBuyNow);

router.post('/buynow/delete-item', cartController.deleteBuynowItem);

router.post('/buynow/move-to-cart', cartController.moveToCart);

router.post('/buynow/confirm-purchase', cartController.confirmOrders);

router.get('/orders', cartController.getOrders);

router.get('/buynow/get-payments', cartController.getPayments);

module.exports = router;