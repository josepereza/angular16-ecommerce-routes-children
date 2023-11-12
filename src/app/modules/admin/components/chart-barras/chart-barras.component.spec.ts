import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartBarrasComponent } from './chart-barras.component';

describe('ChartBarrasComponent', () => {
  let component: ChartBarrasComponent;
  let fixture: ComponentFixture<ChartBarrasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChartBarrasComponent]
    });
    fixture = TestBed.createComponent(ChartBarrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
