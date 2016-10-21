import { RatingsPage } from './app.po';

describe('ratings App', function() {
  let page: RatingsPage;

  beforeEach(() => {
    page = new RatingsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
