import { MarketthemequestionModule } from './marketthemequestion.module';

describe('MarketthemequestionModule', () => {
  let marketthemequestionModule: MarketthemequestionModule;

  beforeEach(() => {
    marketthemequestionModule = new MarketthemequestionModule();
  });

  it('should create an instance', () => {
    expect(marketthemequestionModule).toBeTruthy();
  });
});
