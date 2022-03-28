const userData = {
  loggedin : false,
  userEmail : ''
}

exports.login = (email) => {
  userData.loggedin = true;
  userData.userEmail = email;
}

exports.logout = () => {
  userData.loggedin = false;
  userData.userEmail = '';
}

exports.getLoginState = () => {
  return userData.loggedin;
}

exports.getUserEmail = () => {
  if(userData.loggedin){
    return userData.userEmail;
  } else {
    return false;
  }
}