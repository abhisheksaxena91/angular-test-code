import { StockscoreModule } from './stockscore.module';

describe('StockscoreModule', () => {
  let stockscoreModule: StockscoreModule;

  beforeEach(() => {
    stockscoreModule = new StockscoreModule();
  });

  it('should create an instance', () => {
    expect(stockscoreModule).toBeTruthy();
  });
});
