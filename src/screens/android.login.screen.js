const androidLoginScreen = function() {
  /**
   * Meta
   */

  this.screenName = "Login";

  /**
   * Screen Objects
   */

  this.loginButton = `android=new UiSelector().text("<text>")`;
  this.usernameInput = `android=new UiSelector().resourceId("<id>")`;
};

module.exports = new androidLoginScreen();
