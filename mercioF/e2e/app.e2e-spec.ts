import { MercioFPage } from './app.po';

describe('mercio-f App', () => {
  let page: MercioFPage;

  beforeEach(() => {
    page = new MercioFPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
