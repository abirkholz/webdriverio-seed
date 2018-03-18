class LoginPage {
  constructor() {
    this.pageTitle = `Hacker News`;
    this.url = `https://news.ycombinator.com/login?goto=news`;
  
    this.pageTrait = `input[value="login"]`;
    this.loginButton = `input[value="login"]`;
    this.loginUsernameInput = `input[name="acct"]`;
    this.loginPasswordInput = `input[name="pw"]`;
    this.forgotPassworLink = `a[href="forgot"]`;
  }

  getElement(element) {
    switch (element.toUpperCase()) {
      case "LOGIN BUTTON":
        return this.loginButton;
      case "USERNAME INPUT":
        return this.loginUsernameInput;
      case "PASSWORD INPUT":
        return this.loginPasswordInput;
      default:
        console.log("Element not found in LoginPage.getElement()");
        return null;
    }
  }
}

module.exports = new LoginPage();
