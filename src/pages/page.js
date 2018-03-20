
class Page {
  constructor() {
    title: "";
    url: "";
    pageObjects: "";
  }

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
