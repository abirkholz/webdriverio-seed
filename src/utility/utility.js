const Pages = require("../pages");

class Utilty {
  getPage(pageName) {
    switch (pageName.toUpperCase()) {
      case "HOME":
        return Pages.Home;
      case "LOGIN":
        return Pages.Login;
      default:
        break;
    }
  }
}

module.exports = new Utilty();
