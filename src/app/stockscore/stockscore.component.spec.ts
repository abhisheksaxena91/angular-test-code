import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockscoreComponent } from './stockscore.component';

describe('StockscoreComponent', () => {
  let component: StockscoreComponent;
  let fixture: ComponentFixture<StockscoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockscoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
