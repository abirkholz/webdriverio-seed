class LoginPage {
  constructor() {
    this.pageTitle = `Hacker News`;
    this.url = `https://news.ycombinator.com/login?goto=news`;
    this.pageTrait = `input[value="login"]`;
    this.loginButton = `input[value="login"]`;
    this.loginUsernameInput = `input[name="acct"][0]`;
    this.loginPasswordInput = `input[name="pw"][0]`;
    this.forgotPassworLink = `a[href="forgot"]`;
    this.createAccountUsernameInput = `input[name="acct"][1]`;
    this.createAccountPasswordInput = `input[name="pw"][1]`;
    this.createAccountButton = `input[value="create account"]`;
  }

  getElement(element) {
    switch (element.toUpperCase()) {
      case "LOGIN BUTTON":
        return this.loginButton;
      case "LOGIN USERNAME INPUT":
        return this.loginUsernameInput;
      case "LOGIN PASSWORD INPUT":
        return this.loginPasswordInput;
      default:
        console.log("Element not found in LoginPage.getElement()");
        return null;
    }
  }
}

module.exports = new LoginPage();
