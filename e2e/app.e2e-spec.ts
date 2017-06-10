import { Troop1781.NgPage } from './app.po';

describe('troop1781.ng App', () => {
  let page: Troop1781.NgPage;

  beforeEach(() => {
    page = new Troop1781.NgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
