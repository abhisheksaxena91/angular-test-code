import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceratingComponent } from './performancerating.component';

describe('PerformanceratingComponent', () => {
  let component: PerformanceratingComponent;
  let fixture: ComponentFixture<PerformanceratingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceratingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
