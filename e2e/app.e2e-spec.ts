import { NaszaPracaPage } from './app.po';

describe('nasza-praca App', () => {
  let page: NaszaPracaPage;

  beforeEach(() => {
    page = new NaszaPracaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
