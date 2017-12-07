import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPainelComponent } from './dashboard-painel.component';

describe('DashboardPainelComponent', () => {
  let component: DashboardPainelComponent;
  let fixture: ComponentFixture<DashboardPainelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPainelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
