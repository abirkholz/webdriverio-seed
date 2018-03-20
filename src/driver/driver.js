/**
 * The Driver is a wrapper around the WebDriverIO 'browser' object.
 * It can be used for both mobile and web. 
 * But, it could easily be divided into two drivers: mobile & web. 
 * 
 * Ex: Driver.clickOnElementWithText(Pages.Login.Element, 'textvalue');
 */

class Driver {
  acceptAlert(waitTime) {
    this.wait(waitTime ? waitTime : 3);
    browser.alertAccept();
  }

  clickOnElement(element) {
    this.clickWhenVisible(element);
  }

  clickOnElementIfExists(element) {
    browser.pause(3000);
    if (browser.isExisting(element)) this.clickWhenVisible(element);
  }

  clickOnElementWithText(element, text) {
    this.clickWhenVisible(`${element}=${text}`);
  }

  clickOnElementWithTextIfExists(element, text) {
    browser.pause(3000);
    if (browser.isExisting(`${element}=${text}`))
      this.clickWhenVisible(element);
  }

  clickOnElementClassWithText(elementClass, text) {
    this.clickWhenVisible(`${elementClass}=${text}`);
  }

  clickOnLinkWithText(text) {
    this.clickWhenVisible(`*=${text}`);
  }

  dismissAlert(waitTime) {
    this.wait(waitTime ? waitTime : 3);
    browser.alertDismiss();
  }

  elementExists(element) {
    return browser.isVisible(element);
  }

  fillElementWithText(element, text) {
    browser.waitForExist(element);
    browser.addValue(element, text);
  }

  loadUrl(url) {
    browser.url(url);
    browser.windowHandleMaximize();
  }

  moveToElement(element, xOffset = 0, yOffset = 0) {
    browser.moveToObject(element, xOffset, yOffset);
  }

  openTab(url) {
    browser.newWindow(url);
  }

  shouldHaveTitle(title) {
    browser.getTitle().should.be.equal(title);
  }

  shouldSeeElement(element) {
    browser.waitForExist(element).should.exist;
  }

  shouldSeeElementWithText(element, text) {
    browser.waitForExist(`${element}=${text}`).should.exist;
  }

  shouldSeeElementWithValue(element, value) {
    browser.waitForExist(element).should.exist;
    browser.getAttribute(element, "value").should.have.contain(value);
  }

  shouldSeeElementClassWithText(elementClass, text) {
    browser.waitForExist(`${elementClass}=${text}`).should.exist;
  }

  shouldSeeOptionWithTextIsSelected(text) {
    const element = `option=${text}`;
    browser.waitForExist(element).should.exist;
    browser.isSelected(element).should.be.true;
  }

  shouldSeeText(string) {
    const element = `*=${string}`;
    browser.waitForText(element);
    browser.getText(element).should.have.contain(string);
  }

  switchTab() {
    browser.switchTab(browser.windowHandles([0]));
  }

  wait(int) {
    browser.pause(int * 1000);
  }

  waitForElementNotToExist(element) {
    browser.waitForExist(element); // Wait for element to exist
    browser.waitForExist(element, 120000, false); // Now wait for it to NOT exist (2 mins)
  }

  /**
   * 
   * Utility methods 
   */
  getFirstAvailableElementOnPage(element) {
    const allElementsOfSelector = browser.elements(element).value;

    for (let elem of allElementsOfSelector) {
      if (this.isClickable(elem.selector)) {
        return elem.selector;
      }
    }
  }

  isClickable(element) {
    if ((browser.isExisting(element) && browser.isVisible(element)) === true) {
      return true;
    }

    return false;
  }

  clickWhenVisible(element) {
    browser.waitForExist(element);
    browser.waitForVisible(element);
    let clicked = false;

    do {
      try {
        browser.click(element);
      } catch (error) {
        browser.pause(2000);
      } finally {
        clicked = true;
      }
    } while (!clicked);
  }
}

export default new Driver();
