/**
 * Page
 * The core Page Object from while all Page Objects extend.
 * Please add methods which apply to ALL pages.
 */
class Page {
  constructor() {
    title: "";
    url: "";
    pageObjects: "";
  }

  /**
   * getElement
   * @param {String} element - Name of the element you want to select. The 'needle' in the 'haystack'.
   * @param {Object} pageObjects - A JSON object with the name and id per pageObject (see login.page.json for example)
   */
  getElement(element, pageObjects) {
    let result = null;

    pageObjects.forEach(obj => {
      if (String(obj.name.toUpperCase()) === element.toUpperCase()) {
        result = String(obj.id);
        return;
      }
    });

    return result;
  }
}

export default Page;
