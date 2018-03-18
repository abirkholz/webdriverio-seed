const HomePage = require("./home.page");
const LoginPage = require("./login.page");

class Page {
  
  constructor() {
    this.pageTrait = "";
  }

  get(pageName) {
    switch (pageName.toUpperCase()) {
      case "HOME":
        return HomePage; 
      case "LOGIN":
        return LoginPage;
      default:
        break;
    }
  }
}

module.exports = new Page();
