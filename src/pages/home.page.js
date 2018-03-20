import Page from "./page";
const homePageObjects = require("./home.page.json");

class HomePage extends Page {

  constructor() {
    super();
    this.title = "Home";
    this.url = "http://news.ycombinator.com";
    this.pageObjects = homePageObjects;
  }

  getElement(element) {
    return super.getElement(element, this.pageObjects);
  }
};

// Create new instance, always
export default new HomePage();