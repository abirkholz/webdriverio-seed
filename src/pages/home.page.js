class HomePage {
  constructor() {
    this.title = `Hacker News`;
    this.url = `https://news.ycombinator.com`;
    this.pageTrait = `#hnmain`;
    this.loginLink = `a[href="login?goto=news"]`;
  }

  getElement(element) {
    switch (element.toUpperCase()) {
      case "LOGIN LINK":
        return this.loginLink;
      default:
        console.log("Element not found in HomePage.getElement()");
        break;
    }
  }
}

module.exports = new HomePage();
