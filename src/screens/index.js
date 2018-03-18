
module.exports = {
  Android: { 
    Login: require('./android.login.screen'),
    Signip: require('./android.signup.screen')
  },
  IOS: { 
    Login: require('./ios.login.screen'),
    SignUp: require('./ios.signup.screen')
  }
};