import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePainelComponent } from './home-painel.component';

describe('HomePainelComponent', () => {
  let component: HomePainelComponent;
  let fixture: ComponentFixture<HomePainelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePainelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
