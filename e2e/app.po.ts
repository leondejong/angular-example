import { browser, by, element } from 'protractor';

export class AngularExamplePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ex-app main header h1')).getText();
  }
}
