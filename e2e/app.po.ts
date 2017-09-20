import { browser, by, element } from 'protractor';

export class AngularExamplePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ngx-app h1')).getText();
  }
}
