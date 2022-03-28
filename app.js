const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const indexRoutes = require('./routes/index');
const shopRoutes = require('./routes/shop');
const cartRoutes = require('./routes/cart_orders');

const logindata = require('./util/loginHandler');

const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({limit: '1mb'}));

app.use(indexRoutes);
app.use(shopRoutes);
app.use(cartRoutes);

app.listen(3000);