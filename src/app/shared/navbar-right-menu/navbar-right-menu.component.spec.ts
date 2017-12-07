import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarRightMenuComponent } from './navbar-right-menu.component';

describe('NavbarRightMenuComponent', () => {
  let component: NavbarRightMenuComponent;
  let fixture: ComponentFixture<NavbarRightMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarRightMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarRightMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
