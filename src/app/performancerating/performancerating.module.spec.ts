import { PerformanceratingModule } from './performancerating.module';

describe('PerformanceratingModule', () => {
  let performanceratingModule: PerformanceratingModule;

  beforeEach(() => {
    performanceratingModule = new PerformanceratingModule();
  });

  it('should create an instance', () => {
    expect(performanceratingModule).toBeTruthy();
  });
});
