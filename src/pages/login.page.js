import Page from "./page";
const loginPageObjects = require("./login.page.json");

class LoginPage extends Page {

  constructor() {
    super();
    this.title = "Login";
    this.url = "http://localhost:3000";
    this.pageObjects =  loginPageObjects;
  }

  getElement(element) {
    return super.getElement(element, this.pageObjects);
  }
};

// Create new instance, always
export default new LoginPage();