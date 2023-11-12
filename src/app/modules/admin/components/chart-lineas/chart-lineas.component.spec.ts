import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartLineasComponent } from './chart-lineas.component';

describe('ChartLineasComponent', () => {
  let component: ChartLineasComponent;
  let fixture: ComponentFixture<ChartLineasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChartLineasComponent]
    });
    fixture = TestBed.createComponent(ChartLineasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
