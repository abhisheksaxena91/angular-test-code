import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyalitypartnerComponent } from './loyalitypartner.component';

describe('LoyalitypartnerComponent', () => {
  let component: LoyalitypartnerComponent;
  let fixture: ComponentFixture<LoyalitypartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoyalitypartnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyalitypartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
