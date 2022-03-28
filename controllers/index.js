const userdb = require('../models/userdb');
const { use } = require('../routes');
const loginHandler = require('../util/loginHandler');

function getUserName (){
  const email = loginHandler.getUserEmail();
  let name = '';
  if(email){
    name = email.split('@')[0];
  }
  return [name, email];
}

exports.getIndex = (req, res, next) => {
  const [name, email] = getUserName();

  res.render('index', {
    name : name,
    email: email
  });
}

exports.getSignup = (req, res, next) => {
  res.render('pages/signup');
}

exports.postSignup = async (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const phone = req.body.phone;
  
  let result = await userdb.registerUser(name, email, password, phone);

  if(result == -1){
    res.redirect('/signup/error');
  } else {
    loginHandler.login(email);
    
    res.render('pages/address', {
      email : email
    });
  }
}

exports.getAddress = (req, res, next) => {
  res.redirect('/signup');
}

exports.postAddress = (req, res, next) => {
  const state = req.body.state;
  const city = req.body.city;
  const pincode = req.body.pincode;
  const houseno = req.body.houseno;
  const email = req.body.email; 

  userdb.updateUserAddress(email, state, city, pincode, houseno);

  res.redirect('/');
}

exports.errorSignup = (req, res, next) => {
  res.render('pages/errorsignup', {
    name : ''
  });
}

exports.getLogin = (req, res, next) => {
  res.render('pages/login', {
    loginFailed : false,
    login : false,
    errorMessage : ''
  });
}

exports.postLogin = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  console.log(email, password);

  userdb.validateLogin(email, password)
    .then((result) =>{
      if(result === 'invalid'){
        res.render('pages/login', {
          loginFailed : true,
          login : false,
          errorMessage : 'INVALID EMAIL'
        });
      } else if(result) {
        loginHandler.login(email);
        res.redirect('/');
      } else {
        res.render('pages/login', {
          loginFailed : true,
          login : false,
          errorMessage: 'SORRY WRONG PASSWORD'
        });
      }
    });
}

exports.postLogout = (req, res, next) => {
  loginHandler.logout();
  const [name, email] = getUserName();

  res.render('index', {
    name : name,
    email: email
  });
}