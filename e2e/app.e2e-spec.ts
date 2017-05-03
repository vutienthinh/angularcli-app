import { NewAngularCliPage } from './app.po';

describe('new-angular-cli App', () => {
  let page: NewAngularCliPage;

  beforeEach(() => {
    page = new NewAngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
