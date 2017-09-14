import { AngularExamplePage } from './app.po';

describe('angular-example App', () => {
  let page: AngularExamplePage;

  beforeEach(() => {
    page = new AngularExamplePage();
  });

  it('should display message saying \'Angular Example\'', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Angular Example');
  });
});
