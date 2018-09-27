import { LoyalitypartnerModule } from './loyalitypartner.module';

describe('LoyalitypartnerModule', () => {
  let loyalitypartnerModule: LoyalitypartnerModule;

  beforeEach(() => {
    loyalitypartnerModule = new LoyalitypartnerModule();
  });

  it('should create an instance', () => {
    expect(loyalitypartnerModule).toBeTruthy();
  });
});
