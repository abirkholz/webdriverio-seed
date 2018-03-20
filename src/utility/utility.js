import HomePage from "../pages/home.page";
import LoginPage from "../pages/login.page";

class Utility {
  getPage(page) {
    switch (page.toUpperCase()) {
      case "HOME":
        return HomePage;
      case "LOGIN":
        return LoginPage;
      default:
        console.log("ERROR: could not find page. Is it implemented?");
        return null;
    }
  }
}

// New instance
export default new Utility();
