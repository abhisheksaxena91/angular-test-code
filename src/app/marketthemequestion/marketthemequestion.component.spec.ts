import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketthemequestionComponent } from './marketthemequestion.component';

describe('MarketthemequestionComponent', () => {
  let component: MarketthemequestionComponent;
  let fixture: ComponentFixture<MarketthemequestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketthemequestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketthemequestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
