import { AngularApolloPage } from './app.po';

describe('angular-apollo App', () => {
  let page: AngularApolloPage;

  beforeEach(() => {
    page = new AngularApolloPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
